// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * Vuery 应用程序启动配置方法。
 *
 * @remarks
 * "vite.config.ts": Vuery 应用程序启动配置方法。
 *
 * @packageDocumentation
 */

/// <reference types="@vuery/runtime" />

import { UserConfigExport, defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import figlet from 'figlet';
import { createHtmlPlugin } from 'vite-plugin-html';

/**
 * Vuery 入口程序。
 * @author Wang Yucai
 *
 * @class Program
 * @typedef {Program}
 */
class Program {
  // 开发服务器端口号。
  private static readonly s_developmentServerPort: number = 20230;
  // 开发服务器默认启动的浏览器。
  private static readonly s_launchedBrowser: vuery.KnownBrowser = 'chrome';
  // 开发服务器默认监听的 IP 地址。
  private static readonly s_developmentServerHost: string = '0.0.0.0';

  /**
   * Vuery 入口方法。
   * @author Wang Yucai
   *
   * @static
   * @param {{ mode: any; }} { mode }
   * @returns {UserConfigExport}
   */
  static main({ mode }): UserConfigExport {
    figlet.text('Vuery!', 'ANSI Regular', (error, result) => {
      console.log(result);
    });

    // 当前项目根目录路径。
    const rootDir: string = process.cwd();
    // 上下文环境变量配置目录路径。
    const contextualEnvironmentVarsRootDir: string = resolve(
      rootDir,
      'settings'
    );
    // 应用允许的环境变量前缀。
    const allowEnvironmentVarsPrefixes: Array<string> = [
      'NODE_',
      'VITE_',
      'COMPILER_',
      'RUNTIME_',
    ];
    // 环境变量字典。
    const environmentVars: Record<string, string> = loadEnv(
      mode,
      contextualEnvironmentVarsRootDir,
      allowEnvironmentVarsPrefixes
    );
    // 是否为调试模式。
    const isDebugMode: boolean =
      environmentVars['COMPILER_CONFIGURATION'].toLowerCase() === 'debug';
    // 基础路径。
    const baseUrl: string = isDebugMode ? '/' : './';
    // 模块引用根目录路径。
    const referenceRootDir: string = resolve(rootDir, 'src');
    // 构建物输出目录路径。
    const buildOutputDir: string = resolve(
      rootDir,
      '..',
      '..',
      'build',
      'desktop',
      mode
    );

    // 指定调试期默认启动的浏览器。
    process.env.BROWSER = Program.s_launchedBrowser;

    return defineConfig({
      plugins: [
        vue(),
        createHtmlPlugin({
          'pages': [
            {
              'entry': 'src/main.ts',
              'template': 'index.html',
              'filename': 'index.html',
              'injectOptions': {
                'data': {
                  title: environmentVars.RUNTIME_APPLICATION_NAME,
                },
              },
            },
          ],
        }),
      ],
      base: baseUrl,
      resolve: {
        alias: {
          '@': referenceRootDir,
        },
      },
      clearScreen: false,
      envDir: contextualEnvironmentVarsRootDir,
      envPrefix: allowEnvironmentVarsPrefixes,
      server: {
        host: Program.s_developmentServerHost,
        port: Program.s_developmentServerPort,
        open: true,
      },
      build: {
        outDir: buildOutputDir,
        sourcemap: true,
        rollupOptions: {
          input: {
            index: resolve(rootDir, 'index.html'),
          },
        },
        manifest: true,
        emptyOutDir: true,
      },
    });
  }
}

export default Program.main;

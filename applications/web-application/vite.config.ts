// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import { AliasOptions, UserConfigExport, defineConfig, loadEnv } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';

/**
 * 定义了已知的浏览器类型。
 * @author Wang Yucai
 *
 * @typedef {KnownWebBrowserType}
 */
type KnownWebBrowserType = 'chrome' | 'edge' | 'firefox';

/**
 * 提供了 Vuery2 应用程序相关的入口方法。
 * @author Wang Yucai
 *
 * @class Program
 * @typedef {Program}
 */
class Program {
  /**
   * 调试时默认启动的浏览器。
   * @author Wang Yucai
   *
   * @static
   * @readonly
   * @type {KnownWebBrowserType}
   */
  static readonly defaultLaunchedBrowserWhenDebugging: KnownWebBrowserType = 'chrome';

  /**
   * 允许载入的环境变量前缀。
   * @author Wang Yucai
   *
   * @static
   * @readonly
   * @type {string[]}
   */
  static readonly defaultAllowLoadedEnvironmentVariablePrefixes: string[] = ['VITE_', 'RUNTIME_', 'COMPILER_'];

  /**
   * Vue2 应用程序入口方法。
   * @author Wang Yucai
   *
   * @static
   * @param {{ mode: any; }} param0
   * @param {*} param0.mode
   * @returns {UserConfigExport}
   */
  static main({ mode }): UserConfigExport {
    console.groupCollapsed('Vuery2');

    const workspaceRootDir: string = process.cwd();
    console.debug(`[DEBUG]: 工作空间根目录路径 “${workspaceRootDir}”。`);

    const applicationEnvironmentConfigureDir: string = resolve(workspaceRootDir, '.settings');
    console.debug(`[DEBUG]: 应用程序环境变量 (DOTENV) 配置目录路径 “${applicationEnvironmentConfigureDir}”。`);
    console.debug(`[DEBUG]: 允许装载的环境变量前缀 “${Program.defaultAllowLoadedEnvironmentVariablePrefixes.join(' | ')}”。`);
    const applicationEnvironmentVariablesRecord: Record<string, string> = loadEnv(
      mode,
      applicationEnvironmentConfigureDir,
      Program.defaultAllowLoadedEnvironmentVariablePrefixes
    );

    const applicationInformation: Record<string, any> = require('./package.json');
    console.debug(`[DEBUG]: 当前的应用程序版本为 “v${applicationInformation.version}”。`);

    const applicationPublicBasePath: string = applicationEnvironmentVariablesRecord['VITE_PUBLIC_BASEPATH'] ?? './';
    console.debug(`[DEBUG]: 应用程序公共基础路径为 “${applicationPublicBasePath}”。`);

    const devServerListenedPort: number = parseInt(
      applicationEnvironmentVariablesRecord['VITE_DEFAULT_LISTEND_DEVSERVER_PORT'] ?? '2023'
    );
    const devServerHostName: string = applicationEnvironmentVariablesRecord['VITE_DEFAULT_DEVSERVER_HOSTNAME'] ?? 'localhost';
    if (mode === 'debug') {
      console.debug(`[DEBUG]: 开发服务器监听的网络端口为 “${devServerListenedPort}”。`);
      console.debug(`[DEBUG]: 开发服务器主机名称为 “${devServerHostName}”。`);
      console.debug(
        `[DEBUG]: 我们选择 “${Program.defaultLaunchedBrowserWhenDebugging.toUpperCase()}” 作为调试期首选的浏览器，随应用调试自动启动。`
      );
      process.env.BROWSER = Program.defaultLaunchedBrowserWhenDebugging;
    }

    const builtAssetsOutputRootDir: string = resolve(workspaceRootDir, '../../.build', mode, applicationInformation.version);
    console.debug(`[DEBUG]: 构建物输出路径为 “${builtAssetsOutputRootDir}”。`);

    /**
     * 脚本源代码文件别名配置。
     */
    const sourceScriptsDirAliasOptions: AliasOptions = {
      '~': resolve(workspaceRootDir, 'src'),
    };

    console.groupEnd();

    return defineConfig({
      base: applicationPublicBasePath,
      clearScreen: false,
      envDir: applicationEnvironmentConfigureDir,
      envPrefix: Program.defaultAllowLoadedEnvironmentVariablePrefixes,
      resolve: { alias: sourceScriptsDirAliasOptions },
      plugins: [vue()],
      server: {
        port: devServerListenedPort,
        host: devServerHostName,
        strictPort: true,
        open: true,
      },
      build: {
        outDir: builtAssetsOutputRootDir,
        sourcemap: true,
        manifest: true,
        minify: mode === 'release' ? 'esbuild' : false,
        rollupOptions: {
          input: {
            'index': 'index.html',
          },
          output: {
            assetFileNames: `resources/[ext]/v${applicationInformation.version}-[name]-[hash][extname]`,
            chunkFileNames: `scripts/v${applicationInformation.version}-[name]-[hash].js`,
          },
        },
      },
    });
  }
}

export default Program.main;

/// <reference types="@joingo.vip/native-x" />
import { type I18nMiddlewareOptions } from './globalization.mjs';
import { Version } from './version.mjs';
/**
 * 提供了应用程序相关的基本方法。
 * @author Wang Yucai
 *
 * @export
 * @abstract
 * @class Application
 * @typedef {Application}
 */
export declare abstract class Application {
    /**
     * 应用程序版本号。
     * @author Wang Yucai
     *
     * @type {Version}
     */
    applicationVersion: Version;
    /**
     * 初始化 {@linkcode Application} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     * @protected
     */
    protected constructor();
    /**
     * 启动应用程序。
     * @author Wang Yucai
     *
     * @abstract
     */
    abstract run(): void;
}
/**
 * 定义了应用上下文类型。
 * @author Wang Yucai
 *
 * @export
 * @interface ApplicationContext
 * @typedef {ApplicationContext}
 */
export interface ApplicationContext {
}
/**
 * 无返回值的应用程序中间件方法委托。
 * @author Wang Yucai
 *
 * @export
 * @typedef {ApplicationMiddleware}
 */
export type ApplicationMiddleware = sys.Action1<ApplicationContext>;
/**
 * 提供了构建应用程序相关的基本方法。
 * @author Wang Yucai
 *
 * @export
 * @abstract
 * @class ApplicationBuilder
 * @typedef {ApplicationBuilder}
 */
export declare abstract class ApplicationBuilder {
    /**
     * 初始化 {@linkcode ApplicationBuilder} 的新实例。
     * @author Wang Yucai
     *
     * @constructor
     * @protected
     */
    protected constructor();
    /**
     * 构建应用程序。
     * @author Wang Yucai
     *
     * @abstract
     * @returns {Application}
     */
    abstract build(): Application;
    /**
     * 应用程序版本号。
     * @author Wang Yucai
     *
     * @protected
     * @type {string}
     */
    protected applicationVersion: string;
    /**
     * 配置当前的应用程序版本。
     * @author Wang Yucai
     *
     * @param {(string | Version)} version 版本号。
     * @returns {ApplicationBuilder}
     */
    configureAppVersion(version: string | Version): ApplicationBuilder;
    /**
     * 创建应用程序上下文。
     * @author Wang Yucai
     *
     * @protected
     * @abstract
     * @returns {ApplicationContext}
     */
    protected abstract createAppContext(): ApplicationContext;
    /**
     * 使用指定的应用程序中间件。
     * @author Wang Yucai
     *
     * @param {ApplicationMiddleware} middleware 中间件函数。
     * @returns {ApplicationBuilder}
     */
    use(middleware: ApplicationMiddleware): ApplicationBuilder;
    useI18n(configure?: sys.Func1<I18nMiddlewareOptions, I18nMiddlewareOptions>): ApplicationBuilder;
}

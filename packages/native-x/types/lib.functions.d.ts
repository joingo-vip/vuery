// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

declare namespace sys {
  /**
   * 定义了无返回值的方法委托。
   * @author Wang Yucai
   *
   * @typedef {Action}
   */
  type Action = () => void;

  /**
   * 定义了无返回值的方法委托。
   * @author Wang Yucai
   *
   * @typedef {Action1}
   * @template T1 参数类型。
   */
  type Action1<T1> = (a1: T1) => void;

  /**
   * 定义了无返回值的方法委托。
   * @author Wang Yucai
   *
   * @typedef {Action2}
   * @template T1 参数类型。
   * @template T2 参数类型。
   */
  type Action2<T1, T2> = (a1: T1, a2: T2) => void;

  /**
   * 定义了无返回值的方法委托。
   * @author Wang Yucai
   *
   * @typedef {Action3}
   * @template T1 参数类型。
   * @template T2 参数类型。
   * @template T3 参数类型。
   */
  type Action3<T1, T2, T3> = (a1: T1, a2: T2, a3: T3) => void;

  /**
   * 定义了无返回值的方法委托。
   * @author Wang Yucai
   *
   * @typedef {Action4}
   * @template T1 参数类型。
   * @template T2 参数类型。
   * @template T3 参数类型。
   * @template T4 参数类型。
   */
  type Action4<T1, T2, T3, T4> = (a1: T1, a2: T2, a3: T3, a4: T4) => void;

  /**
   * 定义了无返回值的方法委托。
   * @author Wang Yucai
   *
   * @typedef {Action5}
   * @template T1 参数类型。
   * @template T2 参数类型。
   * @template T3 参数类型。
   * @template T4 参数类型。
   * @template T5 参数类型。
   */
  type Action5<T1, T2, T3, T4, T5> = (a1: T1, a2: T2, a3: T3, a4: T4, a5: T5) => void;

  /**
   * 定义了无返回值的方法委托。
   * @author Wang Yucai
   *
   * @typedef {Action6}
   * @template T1 参数类型。
   * @template T2 参数类型。
   * @template T3 参数类型。
   * @template T4 参数类型。
   * @template T5 参数类型。
   * @template T6 参数类型。
   */
  type Action6<T1, T2, T3, T4, T5, T6> = (a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6) => void;

  /**
   * 定义了无返回值的方法委托。
   * @author Wang Yucai
   *
   * @typedef {Action7}
   * @template T1 参数类型。
   * @template T2 参数类型。
   * @template T3 参数类型。
   * @template T4 参数类型。
   * @template T5 参数类型。
   * @template T6 参数类型。
   * @template T7 参数类型。
   */
  type Action7<T1, T2, T3, T4, T5, T6, T7> = (a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6, a7: T7) => void;

  /**
   * 定义了无返回值的方法委托。
   * @author Wang Yucai
   *
   * @typedef {Action8}
   * @template T1 参数类型。
   * @template T2 参数类型。
   * @template T3 参数类型。
   * @template T4 参数类型。
   * @template T5 参数类型。
   * @template T6 参数类型。
   * @template T7 参数类型。
   * @template T8 参数类型。
   */
  type Action8<T1, T2, T3, T4, T5, T6, T7, T8> = (a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6, a7: T7, a8: T8) => void;

  /**
   * 定义了无返回值的方法委托。
   * @author Wang Yucai
   *
   * @typedef {Action9}
   * @template T1 参数类型。
   * @template T2 参数类型。
   * @template T3 参数类型。
   * @template T4 参数类型。
   * @template T5 参数类型。
   * @template T6 参数类型。
   * @template T7 参数类型。
   * @template T8 参数类型。
   * @template T9 参数类型。
   */
  type Action9<T1, T2, T3, T4, T5, T6, T7, T8, T9> = (
    a1: T1,
    a2: T2,
    a3: T3,
    a4: T4,
    a5: T5,
    a6: T6,
    a7: T7,
    a8: T8,
    a9: T9
  ) => void;

  /**
   * 定义了无返回值的方法委托。
   * @author Wang Yucai
   *
   * @typedef {ParameterizedAction}
   */
  type ParameterizedAction = (...args: any[]) => void;

  /**
   * 定义了 {@linkcode TResult} 类型返回值的方法委托。
   * @author Wang Yucai
   *
   * @typedef {Func}
   * @template TResult 返回值类型。
   */
  type Func<TResult> = () => TResult;

  /**
   * 定义了 {@linkcode TResult} 类型返回值的方法委托。
   * @author Wang Yucai
   *
   * @typedef {Func1}
   * @template T1 参数类型。
   * @template TResult 返回值类型。
   */
  type Func1<T1, TResult> = (a1: T1) => TResult;

  /**
   * 定义了 {@linkcode TResult} 类型返回值的方法委托。
   * @author Wang Yucai
   *
   * @typedef {Func2}
   * @template T1 参数类型。
   * @template T2 参数类型。
   * @template TResult 返回值类型。
   */
  type Func2<T1, T2, TResult> = (a1: T1, a2: T2) => TResult;

  /**
   * 定义了 {@linkcode TResult} 类型返回值的方法委托。
   * @author Wang Yucai
   *
   * @typedef {Func3}
   * @template T1 参数类型。
   * @template T2 参数类型。
   * @template T3 参数类型。
   * @template TResult 返回值类型。
   */
  type Func3<T1, T2, T3, TResult> = (a1: T1, a2: T2, a3: T3) => TResult;

  /**
   * 定义了 {@linkcode TResult} 类型返回值的方法委托。
   * @author Wang Yucai
   *
   * @typedef {Func4}
   * @template T1 参数类型。
   * @template T2 参数类型。
   * @template T3 参数类型。
   * @template T4 参数类型。
   * @template TResult 返回值类型。
   */
  type Func4<T1, T2, T3, T4, TResult> = (a1: T1, a2: T2, a3: T3, a4: T4) => TResult;

  /**
   * 定义了 {@linkcode TResult} 类型返回值的方法委托。
   * @author Wang Yucai
   *
   * @typedef {Func5}
   * @template T1 参数类型。
   * @template T2 参数类型。
   * @template T3 参数类型。
   * @template T4 参数类型。
   * @template T5 参数类型。
   * @template TResult 返回值类型。
   */
  type Func5<T1, T2, T3, T4, T5, TResult> = (a1: T1, a2: T2, a3: T3, a4: T4, a5: T5) => TResult;

  /**
   * 定义了 {@linkcode TResult} 类型返回值的方法委托。
   * @author Wang Yucai
   *
   * @typedef {Func6}
   * @template T1 参数类型。
   * @template T2 参数类型。
   * @template T3 参数类型。
   * @template T4 参数类型。
   * @template T5 参数类型。
   * @template T6 参数类型。
   * @template TResult 返回值类型。
   */
  type Func6<T1, T2, T3, T4, T5, T6, TResult> = (a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6) => TResult;

  /**
   * 定义了 {@linkcode TResult} 类型返回值的方法委托。
   * @author Wang Yucai
   *
   * @typedef {Func7}
   * @template T1 参数类型。
   * @template T2 参数类型。
   * @template T3 参数类型。
   * @template T4 参数类型。
   * @template T5 参数类型。
   * @template T6 参数类型。
   * @template T7 参数类型。
   * @template TResult 返回值类型。
   */
  type Func7<T1, T2, T3, T4, T5, T6, T7, TResult> = (a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6, a7: T7) => TResult;

  /**
   * 定义了 {@linkcode TResult} 类型返回值的方法委托。
   * @author Wang Yucai
   *
   * @typedef {Func8}
   * @template T1 参数类型。
   * @template T2 参数类型。
   * @template T3 参数类型。
   * @template T4 参数类型。
   * @template T5 参数类型。
   * @template T6 参数类型。
   * @template T7 参数类型。
   * @template T8 参数类型。
   * @template TResult 返回值类型。
   */
  type Func8<T1, T2, T3, T4, T5, T6, T7, T8, TResult> = (
    a1: T1,
    a2: T2,
    a3: T3,
    a4: T4,
    a5: T5,
    a6: T6,
    a7: T7,
    a8: T8
  ) => TResult;

  /**
   * 定义了 {@linkcode TResult} 类型返回值的方法委托。
   * @author Wang Yucai
   *
   * @typedef {Func9}
   * @template T1 参数类型。
   * @template T2 参数类型。
   * @template T3 参数类型。
   * @template T4 参数类型。
   * @template T5 参数类型。
   * @template T6 参数类型。
   * @template T7 参数类型。
   * @template T8 参数类型。
   * @template T9 参数类型。
   * @template TResult 返回值类型。
   */
  type Func9<T1, T2, T3, T4, T5, T6, T7, T8, T9, TResult> = (
    a1: T1,
    a2: T2,
    a3: T3,
    a4: T4,
    a5: T5,
    a6: T6,
    a7: T7,
    a8: T8,
    a9: T9
  ) => TResult;

  /**
   * 定义了 {@linkcode TResult} 类型返回值的方法委托。
   * @author Wang Yucai
   *
   * @typedef {ParameterizedFunc}
   * @template TResult 返回值类型。
   */
  type ParameterizedFunc<TResult> = (...args: any[]) => TResult;

  /**
   * 定义了处理事件的委托。
   * @author Wang Yucai
   *
   * @typedef {EventHandler}
   */
  type EventHandler = (sender: any, e: sys.EventArgs) => void;

  /**
   * 定义了处理通用=事件的委托。
   * @author Wang Yucai
   *
   * @typedef {GenericEventHandler}
   * @template TPayload 事件负载数据类型。
   */
  type GenericEventHandler<TPayload> = (sender: any, e: sys.GenericEventArgs<TPayload>) => void;
}

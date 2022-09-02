/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface RouterEventEmitterInterface extends ethers.utils.Interface {
  functions: {
    "swapETHForExactTokens(address,uint256,address[],address,uint256)": FunctionFragment;
    "swapExactETHForTokens(address,uint256,address[],address,uint256)": FunctionFragment;
    "swapExactTokensForETH(address,uint256,uint256,address[],address,uint256)": FunctionFragment;
    "swapExactTokensForTokens(address,uint256,uint256,address[],address,uint256)": FunctionFragment;
    "swapTokensForExactETH(address,uint256,uint256,address[],address,uint256)": FunctionFragment;
    "swapTokensForExactTokens(address,uint256,uint256,address[],address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "swapETHForExactTokens",
    values: [string, BigNumberish, string[], string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactETHForTokens",
    values: [string, BigNumberish, string[], string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactTokensForETH",
    values: [string, BigNumberish, BigNumberish, string[], string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactTokensForTokens",
    values: [string, BigNumberish, BigNumberish, string[], string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapTokensForExactETH",
    values: [string, BigNumberish, BigNumberish, string[], string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapTokensForExactTokens",
    values: [string, BigNumberish, BigNumberish, string[], string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "swapETHForExactTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactETHForTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactTokensForETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactTokensForTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapTokensForExactETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapTokensForExactTokens",
    data: BytesLike
  ): Result;

  events: {
    "Amounts(uint256[])": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Amounts"): EventFragment;
}

export type AmountsEvent = TypedEvent<[BigNumber[]] & { amounts: BigNumber[] }>;

export class RouterEventEmitter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: RouterEventEmitterInterface;

  functions: {
    swapETHForExactTokens(
      router: string,
      amountOut: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapExactETHForTokens(
      router: string,
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapExactTokensForETH(
      router: string,
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapExactTokensForTokens(
      router: string,
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapTokensForExactETH(
      router: string,
      amountOut: BigNumberish,
      amountInMax: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapTokensForExactTokens(
      router: string,
      amountOut: BigNumberish,
      amountInMax: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  swapETHForExactTokens(
    router: string,
    amountOut: BigNumberish,
    path: string[],
    to: string,
    deadline: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapExactETHForTokens(
    router: string,
    amountOutMin: BigNumberish,
    path: string[],
    to: string,
    deadline: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapExactTokensForETH(
    router: string,
    amountIn: BigNumberish,
    amountOutMin: BigNumberish,
    path: string[],
    to: string,
    deadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapExactTokensForTokens(
    router: string,
    amountIn: BigNumberish,
    amountOutMin: BigNumberish,
    path: string[],
    to: string,
    deadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapTokensForExactETH(
    router: string,
    amountOut: BigNumberish,
    amountInMax: BigNumberish,
    path: string[],
    to: string,
    deadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapTokensForExactTokens(
    router: string,
    amountOut: BigNumberish,
    amountInMax: BigNumberish,
    path: string[],
    to: string,
    deadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    swapETHForExactTokens(
      router: string,
      amountOut: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    swapExactETHForTokens(
      router: string,
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    swapExactTokensForETH(
      router: string,
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    swapExactTokensForTokens(
      router: string,
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    swapTokensForExactETH(
      router: string,
      amountOut: BigNumberish,
      amountInMax: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    swapTokensForExactTokens(
      router: string,
      amountOut: BigNumberish,
      amountInMax: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Amounts(uint256[])"(
      amounts?: null
    ): TypedEventFilter<[BigNumber[]], { amounts: BigNumber[] }>;

    Amounts(
      amounts?: null
    ): TypedEventFilter<[BigNumber[]], { amounts: BigNumber[] }>;
  };

  estimateGas: {
    swapETHForExactTokens(
      router: string,
      amountOut: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapExactETHForTokens(
      router: string,
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapExactTokensForETH(
      router: string,
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapExactTokensForTokens(
      router: string,
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapTokensForExactETH(
      router: string,
      amountOut: BigNumberish,
      amountInMax: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapTokensForExactTokens(
      router: string,
      amountOut: BigNumberish,
      amountInMax: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    swapETHForExactTokens(
      router: string,
      amountOut: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapExactETHForTokens(
      router: string,
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapExactTokensForETH(
      router: string,
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapExactTokensForTokens(
      router: string,
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapTokensForExactETH(
      router: string,
      amountOut: BigNumberish,
      amountInMax: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapTokensForExactTokens(
      router: string,
      amountOut: BigNumberish,
      amountInMax: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

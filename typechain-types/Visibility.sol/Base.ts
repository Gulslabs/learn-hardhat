/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface BaseInterface extends utils.Interface {
  functions: {
    "externalFunction()": FunctionFragment;
    "publicFunc()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "externalFunction" | "publicFunc"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "externalFunction",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "publicFunc",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "externalFunction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "publicFunc", data: BytesLike): Result;

  events: {};
}

export interface Base extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BaseInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    externalFunction(overrides?: CallOverrides): Promise<[string]>;

    publicFunc(overrides?: CallOverrides): Promise<[string]>;
  };

  externalFunction(overrides?: CallOverrides): Promise<string>;

  publicFunc(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    externalFunction(overrides?: CallOverrides): Promise<string>;

    publicFunc(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    externalFunction(overrides?: CallOverrides): Promise<BigNumber>;

    publicFunc(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    externalFunction(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    publicFunc(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
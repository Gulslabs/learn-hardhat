/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { BaseContract, BigNumber, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface FallbackInterface extends utils.Interface {
  functions: {};

  events: {
    "Log(string,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Log"): EventFragment;
}

export interface LogEventObject {
  functionName: string;
  gas: BigNumber;
}
export type LogEvent = TypedEvent<[string, BigNumber], LogEventObject>;

export type LogEventFilter = TypedEventFilter<LogEvent>;

export interface Fallback extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FallbackInterface;

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

  functions: {};

  callStatic: {};

  filters: {
    "Log(string,uint256)"(functionName?: null, gas?: null): LogEventFilter;
    Log(functionName?: null, gas?: null): LogEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}

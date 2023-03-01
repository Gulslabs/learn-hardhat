/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Gas, GasInterface } from "../../Gas copy.sol/Gas";

const _abi = [
  {
    inputs: [],
    name: "forever",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "get",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "i",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "loop",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "remove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526000805534801561001457600080fd5b5061044c806100246000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806329092d0e146100675780632f30c6f6146100835780639ff9a6031461009f578063a92100cb146100a9578063c2bc2efc146100b3578063e5aa3d58146100e3575b600080fd5b610081600480360381019061007c919061029e565b610101565b005b61009d60048036038101906100989190610301565b610147565b005b6100a761018f565b005b6100b16101b7565b005b6100cd60048036038101906100c8919061029e565b6101ec565b6040516100da9190610350565b60405180910390f35b6100eb610235565b6040516100f89190610350565b60405180910390f35b600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000905550565b81600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b5b6001156101b55760016000808282546101a9919061039a565b92505081905550610190565b565b60005b600a8110156101e95760038103156101d65760058103156101e9575b80806101e1906103ce565b9150506101ba565b50565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60005481565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061026b82610240565b9050919050565b61027b81610260565b811461028657600080fd5b50565b60008135905061029881610272565b92915050565b6000602082840312156102b4576102b361023b565b5b60006102c284828501610289565b91505092915050565b6000819050919050565b6102de816102cb565b81146102e957600080fd5b50565b6000813590506102fb816102d5565b92915050565b600080604083850312156103185761031761023b565b5b6000610326858286016102ec565b925050602061033785828601610289565b9150509250929050565b61034a816102cb565b82525050565b60006020820190506103656000830184610341565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006103a5826102cb565b91506103b0836102cb565b92508282019050808211156103c8576103c761036b565b5b92915050565b60006103d9826102cb565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361040b5761040a61036b565b5b60018201905091905056fea26469706673582212209e823e54d0248ee68f73b9a0a9dc68f34949a284a4c4447365a6c927e7e19f6b64736f6c63430008110033";

type GasConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GasConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Gas__factory extends ContractFactory {
  constructor(...args: GasConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Gas> {
    return super.deploy(overrides || {}) as Promise<Gas>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Gas {
    return super.attach(address) as Gas;
  }
  override connect(signer: Signer): Gas__factory {
    return super.connect(signer) as Gas__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GasInterface {
    return new utils.Interface(_abi) as GasInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Gas {
    return new Contract(address, _abi, signerOrProvider) as Gas;
  }
}
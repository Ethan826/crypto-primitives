import { codec, hash } from "sjcl";
import { Action, HashingActionType, SymmetricActionType } from "../actions";
import { IStoreState } from "../types/index";

export function reducer(state: IStoreState, action: Action): IStoreState {
  switch (action.type) {
    case HashingActionType.ChangeText:
      return {
        ...state,
        hashing: {
          hashingInput: action.text,
          hashingOutput: codec.hex.fromBits(hash.sha256.hash(action.text))
        }
      };
    case SymmetricActionType.SelectEncrypt:
      return {
        ...state,
        symmetric: {
          ...state.symmetric,
          encrypt: true
        }
      };
    case SymmetricActionType.SelectDecrypt:
      return {
        ...state,
        symmetric: {
          ...state.symmetric,
          encrypt: false
        }
      };
    case SymmetricActionType.ChangeKey:
      return {
        ...state,
        symmetric: {
          ...state.symmetric,
          key: action.text
        }
      };
    default:
      return state;
  }
}

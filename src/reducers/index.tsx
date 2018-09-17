import { codec, hash } from "sjcl";
import { HashingAction, HashingActionType } from "../actions";
import { IStoreState } from "../types/index";

export function enthusiasm(
  state: IStoreState,
  action: HashingAction
): IStoreState {
  switch (action.type) {
    case HashingActionType.ChangeText:
      return {
        ...state,
        hashingInput: action.text,
        hashingOutput: codec.hex.fromBits(hash.sha256.hash(action.text))
      };
    default:
      return state;
  }
}

import { codec, hash } from "sjcl";
import { EnthusiasmAction, EnthusiasmActionType } from "../actions";
import { IStoreState } from "../types/index";

export function enthusiasm(
  state: IStoreState,
  action: EnthusiasmAction
): IStoreState {
  switch (action.type) {
    case EnthusiasmActionType.ChangeText:
      return {
        ...state,
        hashingInput: action.text,
        hashingOutput: codec.hex.fromBits(hash.sha256.hash(action.text))
      };
    default:
      return state;
  }
}

import { codec, hash } from "sjcl";
import { EnthusiasmAction, EnthusiasmActionType } from "../actions";
import { IStoreState } from "../types/index";

export function enthusiasm(
  state: IStoreState,
  action: EnthusiasmAction
): IStoreState {
  switch (action.type) {
    case EnthusiasmActionType.IncrementEnthusiasm:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case EnthusiasmActionType.DecrementEnthusiasm:
      return {
        ...state,
        enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1)
      };
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

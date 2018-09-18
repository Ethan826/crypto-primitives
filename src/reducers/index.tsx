import * as crypto from "crypto-js";
import { Action, HashingActionType, SymmetricActionType } from "../actions";
import { IStoreState } from "../types/index";

export function reducer(state: IStoreState, action: Action): IStoreState {
  // tslint:disable-next-line:no-console
  console.log(JSON.stringify(state));
  switch (action.type) {
    case HashingActionType.ChangeText:
      return {
        ...state,
        hashing: {
          hashingInput: action.text,
          hashingOutput: crypto.SHA256(action.text).toString()
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
          ciphertext: state.symmetric.encrypt
            ? crypto.AES.encrypt(
                action.text,
                state.symmetric.plaintext
              ).toString()
            : state.symmetric.ciphertext,
          plaintext: state.symmetric.encrypt
            ? state.symmetric.plaintext
            : crypto.AES.decrypt(
                action.text,
                state.symmetric.ciphertext
              ).toString(),
          theKey: action.text
        }
      };
    case SymmetricActionType.ChangeCiphertext:
      return {
        ...state,
        symmetric: {
          ...state.symmetric,
          ciphertext: action.text,
          plaintext: crypto.AES.decrypt(
            state.symmetric.theKey,
            action.text
          ).toString()
        }
      };
    case SymmetricActionType.ChangePlaintext:
      return {
        ...state,
        symmetric: {
          ...state.symmetric,
          ciphertext: crypto.AES.encrypt(
            state.symmetric.theKey,
            action.text
          ).toString(),
          plaintext: action.text
        }
      };
    default:
      return state;
  }
}

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
            ? encrypt(action.text, state.symmetric.plaintext)
            : state.symmetric.ciphertext,
          plaintext: state.symmetric.encrypt
            ? state.symmetric.plaintext
            : decrypt(action.text, state.symmetric.ciphertext),
          theKey: action.text
        }
      };
    case SymmetricActionType.ChangeCiphertext:
      return {
        ...state,
        symmetric: {
          ...state.symmetric,
          ciphertext: action.text,
          plaintext: decrypt(state.symmetric.theKey, action.text)
        }
      };
    case SymmetricActionType.ChangePlaintext:
      return {
        ...state,
        symmetric: {
          ...state.symmetric,
          ciphertext: encrypt(state.symmetric.theKey, action.text),
          plaintext: action.text
        }
      };
    default:
      return state;
  }
}

// Helpers

const encrypt = (key: string, plaintext: string): string => {
  return crypto.AES.encrypt(plaintext, key).toString();
};

const decrypt = (key: string, ciphertext: string): string => {
  const bytes = crypto.AES.decrypt(ciphertext, key);
  return bytes.toString(crypto.enc.Utf8);
};

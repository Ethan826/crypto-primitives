import * as crypto from "crypto-js";
import * as forge from "node-forge";

import {
  Action,
  HashingActionType,
  MiningActionType,
  NavigationActionType,
  PublicActionType,
  SymmetricActionType
} from "../actions";
import { IStoreState, Page } from "../types/index";

export function reducer(state: IStoreState, action: Action): IStoreState {
  switch (action.type) {
    case HashingActionType.ChangeText:
      return {
        ...state,
        hashing: {
          hashingInput: action.text,
          hashingOutput: crypto.SHA256(action.text).toString()
        }
      };
    case MiningActionType.ChangeBlock:
      return {
        ...state,
        mining: {
          ...state.mining,
          blockHash: crypto.SHA256(action.text).toString()
        }
      };
    case MiningActionType.ChangeDifficulty:
      return {
        ...state,
        mining: {
          ...state.mining,
          difficulty: parseInt(action.text, 10)
        }
      };
    case PublicActionType.ChangeSignature:
      return { ...state, pki: { ...state.pki, signature: action.text } };
    case PublicActionType.ChangeText:
      return { ...state, pki: { ...state.pki, text: action.text } };
    case PublicActionType.Decrypt:
      return {
        ...state,
        pki: {
          ...state.pki,
          textOutput: pkiDecrypt(state.pki.text, state.pki.keyPair)
        }
      };
    case PublicActionType.Encrypt:
      return {
        ...state,
        pki: {
          ...state.pki,
          textOutput: pkiEncrypt(state.pki.text, state.pki.keyPair)
        }
      };
    case PublicActionType.GenerateKeyPair:
      return {
        ...state,
        pki: {
          ...state.pki,
          keyPair: forge.pki.rsa.generateKeyPair()
        }
      };
    case PublicActionType.Sign:
      return {
        ...state,
        pki: {
          ...state.pki,
          textOutput: sign(state.pki.text, state.pki.keyPair)
        }
      };
    case PublicActionType.Verify:
      return {
        ...state,
        pki: {
          ...state.pki,
          textOutput: verify(
            state.pki.text,
            state.pki.signature,
            state.pki.keyPair
          )
            ? "Valid"
            : "Invalid"
        }
      };
    case NavigationActionType.SelectHashing:
      return {
        ...state,
        navigation: { ...state.navigation, currentPage: Page.Hashing }
      };
    case NavigationActionType.SelectMining:
      return {
        ...state,
        navigation: { ...state.navigation, currentPage: Page.Mining }
      };
    case NavigationActionType.SelectPublic:
      return {
        ...state,
        navigation: { ...state.navigation, currentPage: Page.Public }
      };
    case NavigationActionType.SelectSymmetric:
      return {
        ...state,
        navigation: { ...state.navigation, currentPage: Page.Symmetric }
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

const pkiEncrypt = (plaintext: string, keyPair: forge.pki.KeyPair): string => {
  const encrypted = keyPair.publicKey.encrypt(Buffer.from(plaintext));
  return forge.util.encode64(encrypted);
};

const pkiDecrypt = (ciphertext: string, keyPair: forge.pki.KeyPair): string => {
  const decoded = forge.util.decode64(ciphertext);
  return keyPair.privateKey.decrypt(decoded).toString();
};

const sign = (message: string, keyPair: forge.pki.KeyPair): string => {
  const md = forge.md.sha1.create();
  md.update(message, "utf8");
  return forge.util.encode64(keyPair.privateKey.sign(md));
};

const verify = (
  message: string,
  signature: string,
  keyPair: forge.pki.KeyPair
): boolean => {
  try {
    const md = forge.md.sha1.create();
    md.update(message, "utf8");
    return keyPair.publicKey.verify(
      md.digest().bytes(),
      forge.util.decode64(signature)
    );
  } catch {
    return false;
  }
};

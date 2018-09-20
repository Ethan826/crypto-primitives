import { pki } from "node-forge";

export const enum Page {
  Hashing = "Hashing",
  Mining = "Mining",
  Public = "Public",
  Symmetric = "Symmetric"
}

interface IHashing {
  hashingInput: string;
  hashingOutput: string;
}

interface IMining {
  blockHash: string;
  difficulty: number;
}

interface INavigation {
  currentPage: Page;
}

interface IPublic {
  signature: string;
  text: string;
  textOutput: string;
  keyPair: pki.KeyPair;
}

interface ISymmetric {
  ciphertext: string;
  encrypt: boolean;
  plaintext: string;
  theKey: string;
}

export interface IStoreState {
  hashing: IHashing;
  navigation: INavigation;
  pki: IPublic;
  symmetric: ISymmetric;
  mining: IMining;
}

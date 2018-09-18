interface ISymmetric {
  ciphertext: string;
  encrypt: boolean;
  plaintext: string;
  theKey: string;
}

interface IHashing {
  hashingInput: string;
  hashingOutput: string;
}

export interface IStoreState {
  hashing: IHashing;
  symmetric: ISymmetric;
}

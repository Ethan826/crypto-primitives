interface ISymmetric {
  ciphertext: string;
  encrypt: boolean;
  key: string;
  plaintext: string;
}

interface IHashing {
  hashingInput: string;
  hashingOutput: string;
}

export interface IStoreState {
  hashing: IHashing;
  symmetric: ISymmetric;
}

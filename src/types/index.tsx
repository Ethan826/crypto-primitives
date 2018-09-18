export const enum Page {
  Hashing = "Hashing",
  Intro = "Intro",
  Mining = "Mining",
  Public = "Public",
  Symmetric = "Symmetric"
}

interface INavigation {
  currentPage: Page;
}

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
  navigation: INavigation;
  symmetric: ISymmetric;
}

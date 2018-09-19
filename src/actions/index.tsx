export const enum NavigationActionType {
  SelectHashing = "SelectHashing",
  SelectMining = "SelectMining",
  SelectPublic = "SelectPublic",
  SelectSymmetric = "SelectSymmetric"
}

export const enum HashingActionType {
  ChangeText = "ChangeText"
}

export const enum MiningActionType {
  ChangeBlock = "ChangeBlock",
  ChangeDifficulty = "ChangeDifficulty"
}

export const enum SymmetricActionType {
  ChangeCiphertext = "ChangeCiphertext",
  ChangeKey = "ChangeKey",
  ChangePlaintext = "ChangePlaintext",
  SelectDecrypt = "SelectDecrypt",
  SelectEncrypt = "SelectEncrypt"
}

export interface INavigationSelectHashing {
  type: NavigationActionType.SelectHashing;
}

export interface INavigationSelectMining {
  type: NavigationActionType.SelectMining;
}

export interface INavigationSelectPublic {
  type: NavigationActionType.SelectPublic;
}

export interface INavigationSelectSymmetric {
  type: NavigationActionType.SelectSymmetric;
}

export interface IHashingChangeText {
  type: HashingActionType.ChangeText;
  text: string;
}

export interface IMiningChangeBlock {
  type: MiningActionType.ChangeBlock;
  text: string;
}
export interface IMiningChangeDifficulty {
  type: MiningActionType.ChangeDifficulty;
  text: string;
}

export interface ISymmetricChangeKey {
  type: SymmetricActionType.ChangeKey;
  text: string;
}

export interface ISymmetricChangePlaintext {
  type: SymmetricActionType.ChangePlaintext;
  text: string;
}

export interface ISymmetricChangeCiphertext {
  type: SymmetricActionType.ChangeCiphertext;
  text: string;
}

export interface ISymmetricSelectEncrypt {
  type: SymmetricActionType.SelectEncrypt;
}
export interface ISymmetricSelectDecrypt {
  type: SymmetricActionType.SelectDecrypt;
}

export type HashingAction = IHashingChangeText;

export type MiningAction = IMiningChangeBlock | IMiningChangeDifficulty;

export type NavigationAction =
  | INavigationSelectHashing
  | INavigationSelectMining
  | INavigationSelectPublic
  | INavigationSelectSymmetric;

export type SymmetricAction =
  | ISymmetricChangeCiphertext
  | ISymmetricChangeKey
  | ISymmetricChangePlaintext
  | ISymmetricSelectDecrypt
  | ISymmetricSelectEncrypt;

export type Action =
  | NavigationAction
  | SymmetricAction
  | HashingAction
  | MiningAction;

export const hashingChangeText = (text: string): IHashingChangeText => {
  return {
    text,
    type: HashingActionType.ChangeText
  };
};

export const miningChangeBlock = (text: string): IMiningChangeBlock => {
  return { type: MiningActionType.ChangeBlock, text };
};

export const miningChangeDifficulty = (
  text: string
): IMiningChangeDifficulty => {
  return { type: MiningActionType.ChangeDifficulty, text };
};

export const navigationSelectHashing = (): INavigationSelectHashing => {
  return { type: NavigationActionType.SelectHashing };
};

export const navigationSelectMining = (): INavigationSelectMining => {
  return { type: NavigationActionType.SelectMining };
};

export const navigationSelectPublic = (): INavigationSelectPublic => {
  return { type: NavigationActionType.SelectPublic };
};

export const navigationSelectSymmetric = (): INavigationSelectSymmetric => {
  return { type: NavigationActionType.SelectSymmetric };
};

export const symmetricSelectEncrypt = (): ISymmetricSelectEncrypt => {
  return { type: SymmetricActionType.SelectEncrypt };
};

export const symmetricSelectDecrypt = (): ISymmetricSelectDecrypt => {
  return { type: SymmetricActionType.SelectDecrypt };
};

export const symmetricChangeKey = (text: string): ISymmetricChangeKey => {
  return {
    text,
    type: SymmetricActionType.ChangeKey
  };
};

export const symmetricChangeCiphertext = (
  text: string
): ISymmetricChangeCiphertext => {
  return {
    text,
    type: SymmetricActionType.ChangeCiphertext
  };
};

export const symmetricChangePlaintext = (
  text: string
): ISymmetricChangePlaintext => {
  return {
    text,
    type: SymmetricActionType.ChangePlaintext
  };
};

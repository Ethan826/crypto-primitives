export const enum NavigationActionType {
  SelectHashing = "SelectHashing",
  SelectIntro = "SelectIntro",
  SelectMining = "SelectMining",
  SelectPublic = "SelectPublic",
  SelectSymmetric = "SelectSymmetric"
}

export const enum HashingActionType {
  ChangeText = "ChangeText"
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
export interface INavigationSelectIntro {
  type: NavigationActionType.SelectIntro;
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

export type NavigationAction =
  | INavigationSelectHashing
  | INavigationSelectIntro
  | INavigationSelectMining
  | INavigationSelectPublic
  | INavigationSelectSymmetric;

export type SymmetricAction =
  | ISymmetricChangeCiphertext
  | ISymmetricChangeKey
  | ISymmetricChangePlaintext
  | ISymmetricSelectDecrypt
  | ISymmetricSelectEncrypt;

export type HashingAction = IHashingChangeText;

export type Action = NavigationAction | SymmetricAction | HashingAction;

export const navigationSelectHashing = (): INavigationSelectHashing => {
  return { type: NavigationActionType.SelectHashing };
};

export const navigationSelectIntro = (): INavigationSelectIntro => {
  return { type: NavigationActionType.SelectIntro };
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

export const hashingChangeText = (text: string): IHashingChangeText => {
  return {
    text,
    type: HashingActionType.ChangeText
  };
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

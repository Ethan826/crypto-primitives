export const enum HashingActionType {
  ChangeText = "ChangeText"
}

export const enum SymmetricActionType {
  ChangeKey = "ChangeKey",
  SelectDecrypt = "SelectDecrypt",
  SelectEncrypt = "SelectEncrypt"
}

export interface IHashingChangeText {
  type: HashingActionType.ChangeText;
  text: string;
}

export interface ISymmetricChangeKey {
  type: SymmetricActionType.ChangeKey;
  text: string;
}

export interface ISymmetricSelectEncrypt {
  type: SymmetricActionType.SelectEncrypt;
}
export interface ISymmetricSelectDecrypt {
  type: SymmetricActionType.SelectDecrypt;
}

export type SymmetricAction =
  | ISymmetricSelectDecrypt
  | ISymmetricSelectEncrypt
  | ISymmetricChangeKey;

export type HashingAction = IHashingChangeText;

export type Action = SymmetricAction | HashingAction;

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

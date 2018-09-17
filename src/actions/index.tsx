export const enum HashingActionType {
  ChangeText = "ChangeText"
}

export const enum SymmetricActionType {
  SelectEncrypt = "SelectEncrypt",
  SelectDecrypt = "SelectDecrypt"
}

export interface IChangeText {
  type: HashingActionType.ChangeText;
  text: string;
}

export interface ISelectEncrypt {
  type: SymmetricActionType.SelectEncrypt;
}
export interface ISelectDecrypt {
  type: SymmetricActionType.SelectDecrypt;
}

export type SymmetricAction = ISelectDecrypt | ISelectEncrypt;

export type HashingAction = IChangeText;

export type Action = SymmetricAction | HashingAction;

export const changeText = (text: string): IChangeText => {
  return {
    text,
    type: HashingActionType.ChangeText
  };
};

export const selectEncrypt = (): ISelectEncrypt => {
  return { type: SymmetricActionType.SelectEncrypt };
};

export const selectDecrypt = (): ISelectDecrypt => {
  return { type: SymmetricActionType.SelectDecrypt };
};

export enum HashingActionType {
  ChangeText
}

export interface IChangeText {
  type: HashingActionType.ChangeText;
  text: string;
}

export type HashingAction = IChangeText;

export function changeText(text: string): IChangeText {
  return {
    text,
    type: HashingActionType.ChangeText
  };
}

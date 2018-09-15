export enum EnthusiasmActionType {
  IncrementEnthusiasm,
  DecrementEnthusiasm,
  ChangeText
}

export interface IIncrementEnthusiasm {
  type: EnthusiasmActionType.IncrementEnthusiasm;
}

export interface IDecrementEnthusiasm {
  type: EnthusiasmActionType.DecrementEnthusiasm;
}

export interface IChangeText {
  type: EnthusiasmActionType.ChangeText;
  text: string;
}

export type EnthusiasmAction =
  | IIncrementEnthusiasm
  | IDecrementEnthusiasm
  | IChangeText;

export function incrementEnthusiasm(): IIncrementEnthusiasm {
  return {
    type: EnthusiasmActionType.IncrementEnthusiasm
  };
}

export function decrementEnthusiasm(): IDecrementEnthusiasm {
  return {
    type: EnthusiasmActionType.DecrementEnthusiasm
  };
}

export function changeText(text: string): IChangeText {
  return {
    text,
    type: EnthusiasmActionType.ChangeText
  };
}

export enum EnthusiasmActionType {
  IncrementEnthusiasm,
  DecrementEnthusiasm
}

export interface IIncrementEnthusiasm {
  type: EnthusiasmActionType.IncrementEnthusiasm;
}

export interface IDecrementEnthusiasm {
  type: EnthusiasmActionType.DecrementEnthusiasm;
}

export type EnthusiasmAction = IIncrementEnthusiasm | IDecrementEnthusiasm;

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

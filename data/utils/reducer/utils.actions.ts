import { Action } from "@ngrx/store";
import { CmmErrorStateModel } from "../models/utils.model";

export enum UtilsActionTypes {
  //*Acción de setear spinner
  SetSpinner = '[Set spinner] Set spinner',
  SetErrorState = '[Set errorState] Set errorState',
  ClearErrorState = '[Clear errorState] Clear errorState'
}

export class setSpinner implements Action {
  readonly type = UtilsActionTypes.SetSpinner;

  constructor(public payload: boolean) {
  }
}

export class setErrorState implements Action {
  readonly type = UtilsActionTypes.SetErrorState;

  constructor(public payload: CmmErrorStateModel) {
  }
}
export class clearErrorState implements Action {
  readonly type = UtilsActionTypes.ClearErrorState;

  constructor(public payload: CmmErrorStateModel) {
  }
}


export type UtilsActions = setSpinner | setErrorState | clearErrorState

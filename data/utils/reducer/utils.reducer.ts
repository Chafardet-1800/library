import { UtilsActionTypes, UtilsActions } from "./utils.actions";
import { CmmErrorStateModel, CmmUtilsStateModel } from "../models/utils.model";

export const initialSpinnerState: boolean = false

export const initialErrorState: CmmErrorStateModel = {hasError: false, errorMessage: ''}

export const initialUtilsState: CmmUtilsStateModel = {
  utils: {
    spinner: initialSpinnerState,
    errorState: initialErrorState
  }
}

export function UtilsReducer(
  state:CmmUtilsStateModel = initialUtilsState,
  action: UtilsActions
) {
  switch (action.type) {
    case UtilsActionTypes.SetSpinner:
      return {
        utils: {
          ...state.utils,
          spinner: action.payload
        }
      }
    case UtilsActionTypes.SetErrorState:
      return {
        utils: {
          ...state.utils,
          errorState: action.payload
        }
      }
    case UtilsActionTypes.ClearErrorState:
      return {
        utils: {
          ...state.utils,
          errorState: initialErrorState
        }
      }
    default:
      return state
  }
}

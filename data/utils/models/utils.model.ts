import { HttpContextToken } from "@angular/common/http";

/**
 * Interface para el estado del reducer de Utils
 */
export interface CmmUtilsStateModel {
  utils: {
    spinner: boolean
  },
}

/**
 * Contexto para indicar si se usa o no el spinner
 */
export const USE_SPINNER = new HttpContextToken(() => true)

/**
 * Contexto para indicar si la petición coloca 2 peticiones al spinner
 */
export const SET_DOBLE_SPINNER = new HttpContextToken(() => false)

/**
 * Contexto para indicar si la petición quita 2 peticiones al spinner
 */
export const DROP_DOBLE_SPINNER = new HttpContextToken(() => false)

/**
 * Interface para los bancos que se van a recibir del servicio CmmGetBanksList
 */
export interface CmmBanksModel {
  bankDescription: string;
  bankId: string;
  prefix: string;
}

import { HttpContextToken } from "@angular/common/http";

/**
 * Interface para el estado del reducer de Utils
 */
export interface CmmUtilsStateModel {
  utils: {
    spinner: boolean,
    errorState: CmmErrorStateModel
  },
}

/**
 * Contexto para indicar si se usa o no el spinner
 */
export const USE_SPINNER = new HttpContextToken(() => true)

/**
 * Contexto para indicar si la petición tendrá un spinner con duración indefinida
 */
export const EXTENDED_SPINNER = new HttpContextToken(() => undefined)

/**
 * Indica si la petición tendrá un timeout
 */
export const CANCEL_ON_TIMEOUT = new HttpContextToken(() => true)

/**
 * Tiempo máximo para que se cancele un request
 */
export const MaxRequestTime = 5000

/**
 * Interface para los bancos que se van a recibir del servicio CmmGetBanksList
 */
export interface CmmBanksModel {
  bankDescription: string;
  bankId: string;
  prefix: string;
}

//? Lógica de errores

/**
 * Modelo de objeto con de método
 */
export interface CmmMethodModel {
  trackingCode: string,
  name: string,
  source: string
}

/**
 * Modelo del módulo
 */
export interface CmmModuleModel {
  name: string,
  trackingCode: string
}

export interface CmmErrorStateModel {
  hasError: boolean,
  errorMessage: string
}

/**
 * Listado de proyectos
 */
export const CmmProjectMethods: CmmMethodModel[] = []

/**
 * Listado de módulos
 */
export const CmmModulesList: CmmModuleModel[] = []

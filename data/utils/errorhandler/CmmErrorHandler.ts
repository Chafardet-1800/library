import { ErrorHandler, Injectable } from "@angular/core"
import { Store } from "@ngrx/store"
import { CmmDataService } from "src/app/common/services/data.service"
import { CmmModulesList, CmmProjectMethods } from "../models/utils.model"


@Injectable()
export class CmmErrorHandler implements ErrorHandler {

  constructor(
    private store: Store,
    private dataService: CmmDataService
  ) {

  }

  handleError(error: Error) {

    //* Veo si el método falló en la parte asíncrona
    let methodFailedObserver = error?.stack?.split('\n')?.[1]?.includes('Object.next')

    //* Esto me permite obtener el nombre del método que sale en la primera línea del stack del error
    let failedMethod = error?.stack?.split('\n')?.[1]?.split('.')?.[1]?.split('(')?.[0]?.trim()

    //* TrackingCode del método que falló
    let trackingCode: string = ''

    //* Nombre del módulo en el que falló el método
    let failedModule: string | undefined = ''

    //* Si el método falló en la parte de la parte asíncrona, entonces consigo su módulo
    if(methodFailedObserver) {

      //* Consigo el nombre del módulo
      failedModule = error?.stack?.split('\n')?.[1]?.split('(')?.[1]?.split(')')?.[0]?.split('modules')?.[1]?.split('_')?.[1]

      if(failedMethod) {

        //* Consigo el trackingCode del módulo que falló
        trackingCode = CmmModulesList.filter(module => module.name == failedModule)?.[0]?.trackingCode

      }

    } else if(failedMethod && !methodFailedObserver) {

      //* Consigo el trackingCode del método fallido
      trackingCode = CmmProjectMethods.filter(method => method.name == failedMethod  && error.stack?.includes(method.source))?.[0]?.trackingCode

    }

    //* Seteo el estado de error
    this.dataService.CmmSetCatchError({error:error, trackingCode: trackingCode})

  }


}

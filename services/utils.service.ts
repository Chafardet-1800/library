import { HttpClient } from '@angular/common/http';
import { HostListener, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CmmUtilsService {
  /**
   * Variable que contiene la url del gateway
   */
  gatewayUrl: string;

  /**
   * Posición de scroll
   */
  previousScrollY: number = 0

  /**
   * Observable que indica si estoy scrolleando hacia abajo
   */
  isScrollingDown: BehaviorSubject<boolean> = new BehaviorSubject(false)

  constructor(private http: HttpClient) {

    //*Tomo la url de del environment del proyecto. Todos deberían tener la variable "CC_GATEWAY_URL"
    this.gatewayUrl = environment.CC_GATEWAY_URL;

    //* Escucho el evento de scroll
    window.addEventListener('scroll', () => {
      this.detectScrollingDown()
    })

  }

  /**
   *
   * @returns Api listado de monedas
   */
  CmmGetCurrenciesList(): Observable<any> {
    return this.http.get(this.gatewayUrl + '/v1/list/currencies');
  }

  /**
   *
   * @returns Api listado de paises
   */
  CmmGetCountriesList(): Observable<any> {
    return this.http.get(this.gatewayUrl + '/v1/list/countries');
  }

  /**
   *
   * @returns Api listado de generos
   */
  CmmGetGendersList(): Observable<any> {
    return this.http.get(this.gatewayUrl + '/v1/list/gender');
  }

  /**
   *
   * @returns Api listado de bancos
   */
  CmmGetBanksList(idCurrency: string | number): Observable<any> {

    return this.http.get(this.gatewayUrl + '/v1/list/bank', {
      params: {
        idCurrency
      }
    });

  }

  /**
   * Función para sortear los items del keyvalue pipe
   * @param a
   * @param b
   * @returns
   */
  keepOrder = (a: any, b: any) => {
    return 0;
  }

  /**
   * Indica si estoy scrolleando hacia abajo
   * @returns 
   */
  detectScrollingDown(): Observable<boolean> {

    if (window.scrollY > this.previousScrollY) {

      this.previousScrollY = window.scrollY

      this.isScrollingDown.next(true)
      return this.isScrollingDown.asObservable()
    }

    this.previousScrollY = window.scrollY

    this.isScrollingDown.next(false)
    return this.isScrollingDown.asObservable()

  }

}

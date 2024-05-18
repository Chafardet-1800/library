import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cmp-cmm-breadcrumb',
  templateUrl: './cmm-breadcrumb.component.html',
  styleUrls: ['./cmm-breadcrumb.component.scss']
})
export class CmmBreadcrumbComponent {

  /**
   * Guarda las rutas
   */
  paths: string[] = []

  /**
   * Tipo de separador de rutas
   */
  @Input() separatorMode: 'chevron' | 'slash' = 'slash'

  /**
   * Rutas del breadcrumb
   */
  navigationRoutes: {
    name: string,
    route: string
  }[] = []

  constructor(
    private router: Router
  ) {

  }

  ngOnInit() {

    this.getPaths()

    this.listenRouteChanges()

  }

  /**
   * Escucha los cambios de ruta
   */
  listenRouteChanges() {

    this.router.events.subscribe(event => {
      this.getPaths()
    })

  }

  /**
   * Obtiene todas las partes del breadcrumb
   */
  getPaths() {

    this.navigationRoutes = []

    let paths = location.pathname.split('/')

    paths.shift()

    this.paths = paths

    //* Agrego cada ruta a mi array
    for (let i = 0; i < this.paths.length; i++) {

      const element = this.paths[i];
      let newPath

      if (paths[i - 1]) {
        newPath = paths[i - 1] += '/' + element
      } else {
        newPath = element
      }

      //* Agrego cada ruta de navegación con su nombre correspondiente
      this.navigationRoutes.push(
        {
          name: element,
          route: newPath
        }
      )

    }

  }

  /**
   * Me lleva a la ruta clickeada
   * @param route 
   */
  navigate(route: string) {

    this.router.navigate([route])

  }

}

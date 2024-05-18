import { Component } from '@angular/core';
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

  constructor(
    private router: Router
  ) {

  }

  ngOnInit() {

    this.getPaths()

    this.listenRouteChanges()

  }

  listenRouteChanges() {

    this.router.events.subscribe(event => {
      this.getPaths()
    })

  }

  getPaths() {

    let paths = location.pathname.split('/')

    paths.shift()

    this.paths = paths

    // console.log(paths);

  }

  navigate(route: string) {

    this.router.navigate([route])

  }

}

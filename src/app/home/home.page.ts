import { Component } from '@angular/core';
import { NavController, MenuController, IonToolbar } from '@ionic/angular';
import { Router } from '@angular/router';
import { MenuChangeEventDetail, MenuControllerI } from '@ionic/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private menu: MenuController) {

  }

  login() {
    this.router.navigateByUrl('/categorias');
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController, MenuController, IonToolbar } from '@ionic/angular';
import { Router } from '@angular/router';
import { MenuChangeEventDetail, MenuControllerI } from '@ionic/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  ngOnDestroy(): void {
    this.menu.enable(true);
  }

  ngOnInit(): void {
    this.menu.enable(false);
  }

  constructor(private router: NavController, private menu: MenuController) {
  }

  login() {
    this.router.navigateRoot(['/categorias']);
  }

}

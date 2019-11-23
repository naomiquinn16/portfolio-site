import { Component, OnInit } from '@angular/core';
import {trigger, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(2000, style({opacity: 1}))
      ])
    ])
  ]
})
export class NavbarComponent implements OnInit {

  showBurger = true;
  constructor() { }

  ngOnInit() {
  }

  openNav() {
    this.showBurger = false;
    document.getElementById('myNav').style.width = '100%';

  }

  closeNav() {
    this.showBurger = true;
    document.getElementById('myNav').style.width = '0%';
  }
}

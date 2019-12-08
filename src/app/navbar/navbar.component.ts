import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { WINDOW } from '../window.service';
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
  public showSmallLogo = false;
  num = 0;
  public ngxScrollToOffset: number;
  public ngxScrollToDuration: number;
  constructor(
    private route: ActivatedRoute,
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
    )
    {
    this.ngxScrollToOffset = -26;
    this.ngxScrollToDuration = 1500;
   }
  fields = [
    'about',
    'work',
    'play',
    'contact'
  ];


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

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.num = this.window.pageYOffset;
    console.log(this.num);

    if (this.num > 500) {
      this.showSmallLogo = true;
    } else if (this.num < 10) {
      this.showSmallLogo = false;
    }
  }
}

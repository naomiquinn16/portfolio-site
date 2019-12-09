import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { WINDOW } from '../window.service';
import { prepareEventListenerParameters } from '@angular/compiler/src/render3/view/template';
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
  public showBigLogo = true;
  scrolledAmount = 0;
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
    this.showBigLogo = false;
    document.getElementById('myNav').style.width = '100%';
  }

  closeNav() {
    this.showBurger = true;
    document.getElementById('myNav').style.width = '0%';
    this.showBigLogo = true;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolledAmount = this.window.pageYOffset;

    if (this.scrolledAmount > 500) {
      this.showSmallLogo = true;
    } else if (this.scrolledAmount < 10) {
      this.showSmallLogo = false;
    }
  }
}

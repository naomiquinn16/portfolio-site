import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { trigger, style, animate, transition, state } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { WINDOW } from '../window.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { MenuOverlayComponent } from '../menu-overlay/menu-overlay.component';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(2000, style({ opacity: 1 }))
      ])
    ]),
    trigger('swivel', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(-360deg)' })),
      transition('rotated => default', animate('2000ms ease-out')),
      transition('default => rotated', animate('2000ms ease-in'))
    ])
  ]
})
export class NavbarComponent implements OnInit {
  showBurger = true;
  public showSmallLogo = false;
  public showBigLogo = true;
  scrolledAmount = 0;
  state = 'default';
  constructor(
    private route: ActivatedRoute,
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window,
    private dialog: MatDialog,
    private scrollToService: ScrollToService
  ) {}

  ngOnInit() {}

  openNav() {
    this.rotate();
    this.showBurger = false;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.minWidth = '100vw';
    dialogConfig.minHeight = '100vh';
    dialogConfig.panelClass = 'overlay';
    dialogConfig.data = {
      showBurger: this.showBurger,
    };
    const dialogRef = this.dialog.open(MenuOverlayComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(data =>
      this.scrollToLocation(data)
    );
  }

  scrollToLocation(data){
    this.showBurger = data.showBurger;
    this.scrollToService.scrollTo({target: data.selectedMenuField});
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

  rotate() {
    this.state = (this.state === 'default' ? 'rotated' : 'default');
  }
}

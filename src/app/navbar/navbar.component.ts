import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { WINDOW } from '../window.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { MenuOverlayComponent } from '../menu-overlay/menu-overlay.component';
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
    @Inject(WINDOW) private window: Window,
    private dialog: MatDialog
  ) {
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
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.minWidth = '100vw';
    dialogConfig.minHeight = '100vh';
    dialogConfig.panelClass = 'overlay';
    dialogConfig.data = {
      menuFields: this.fields,
      showBurger: this.showBurger,
    };
    const dialogRef = this.dialog.open(MenuOverlayComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(data =>
       this.showBurger = data.showBurger,
    );
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

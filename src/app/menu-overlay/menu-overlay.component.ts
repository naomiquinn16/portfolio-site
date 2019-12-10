import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-menu-overlay',
  templateUrl: './menu-overlay.component.html',
  styleUrls: ['./menu-overlay.component.scss']
})
export class MenuOverlayComponent implements OnInit {
  showBurger: boolean;
  selectedMenuField: string;
  menuFields = [
    'about',
    'work',
    'play',
    'contact'
  ];
  constructor(
  private dialogRef: MatDialogRef < MenuOverlayComponent >,
  @Inject(MAT_DIALOG_DATA) data){
    this.showBurger = data.showBuger;
  }

  ngOnInit() {
  }
  closeNav(menuField) {
    this.showBurger = true;
    this.dialogRef.close({showBurger: this.showBurger , selectedMenuField: menuField});
  }

}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuOverlayComponent } from './menu-overlay.component';

describe('MenuOverlayComponent', () => {
  let component: MenuOverlayComponent;
  let fixture: ComponentFixture<MenuOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

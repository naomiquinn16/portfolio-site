import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module'
import { FlexLayoutModule } from '@angular/flex-layout';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { AngularMaterialComponentsModule } from './angular-material-components.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { PlayComponent } from './play/play.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { WINDOW_PROVIDERS } from './window.service';
import { MenuOverlayComponent } from './menu-overlay/menu-overlay.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    WorkComponent,
    PlayComponent,
    ContactComponent,
    HomeComponent,
    MenuOverlayComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularMaterialComponentsModule,
    FlexLayoutModule,
    ScrollToModule.forRoot()
  ],
  providers: [WINDOW_PROVIDERS],
  bootstrap: [AppComponent],
  entryComponents: [MenuOverlayComponent]
})
export class AppModule { }

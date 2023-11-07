import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './components/sideMenuComponent/side-menu/side-menu.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SideMenuButtonComponent } from './components/sideMenuComponent/side-menu-button/side-menu-button.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    NavbarComponent,
    SideMenuButtonComponent,
    SearchbarComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

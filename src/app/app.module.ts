import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { WhiteSectionComponent } from './componentes/white-section/white-section.component';
import { CardSectionComponent } from './componentes/card-section/card-section.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BannerComponent,
    WhiteSectionComponent,
    CardSectionComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

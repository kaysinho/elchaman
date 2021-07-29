import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { WhiteSectionComponent } from './componentes/white-section/white-section.component';
import { CardSectionComponent } from './componentes/card-section/card-section.component';
import { CommonModule } from '@angular/common';
import { ImageTextComponent } from './componentes/image-text/image-text.component';
import { TextImageComponent } from './componentes/text-image/text-image.component';
import { TextVideoComponent } from './componentes/text-video/text-video.component';
import { VideoTextComponent } from './componentes/video-text/video-text.component';
import { UrlSafePipe } from './pipes/url-safe.pipe';
import { ContactanosTextComponent } from './componentes/contactanos-text/contactanos-text.component';
import { ContactanosComponent } from './componentes/contactanos/contactanos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BannerComponent,
    WhiteSectionComponent,
    CardSectionComponent,
    ImageTextComponent,
    TextImageComponent,
    TextVideoComponent,
    VideoTextComponent,
    UrlSafePipe,
    ContactanosTextComponent,
    ContactanosComponent
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

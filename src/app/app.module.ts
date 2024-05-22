import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ShareModule } from './shared/share.module';

// Configuración del locale de la app para el idioma
import localEsCO from '@angular/common/locales/es-CO';
import localEsCA from '@angular/common/locales/fr-CA';
import { registerLocaleData } from '@angular/common';
registerLocaleData( localEsCO )
registerLocaleData( localEsCA )


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ShareModule,

  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-CO' }],
  bootstrap: [AppComponent]
})
export class AppModule { }

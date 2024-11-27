import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MundoPokemonComponent } from './pages/mundo-pokemon/mundo-pokemon.component';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';

//  ------------------  Inicio Edito  -------------
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//  ------------------  Fin Edito  -------------

@NgModule({
  declarations: [
    AppComponent,
    MundoPokemonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule,
    PagesModule,
    //  ------------------  Inicio Edito  -------------
    NgxPaginationModule,
    BrowserAnimationsModule,
    //  -----------------  Fin Edito  ------------------
    
    // MatSlideToggleModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

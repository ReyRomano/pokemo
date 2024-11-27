import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MundoPokemonComponent } from './mundo-pokemon/mundo-pokemon.component';
import { ComponentsModule } from '../components/components.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    //MundoPokemonComponent,
    //PokemonComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    
  ],
  exports: [
    FormsModule  //Formularios template p´/usar ngModel
  ]
})
export class PagesModule { }

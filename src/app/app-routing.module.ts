import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MundoPokemonComponent } from './pages/mundo-pokemon/mundo-pokemon.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: 'mundoPokemon',
    component: MundoPokemonComponent
  },
  {
    path: '**',
    redirectTo: '/mundoPokemon'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component } from '@angular/core';
import { PokemonsService } from './services/pokemons.service';
//import { PokemonResponse } from './interfaces/pokemon-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'pokemonapp';
  /*constructor( private pokemonsService: PokemonsService ) {
    this.pokemonsService.getPokemon()
    // .subscribe( (resp: PokemonResponse) => {  //Llamo 'subscribe' para disparar la funcion hhtp de un observable 
    .subscribe( resp => {
      console.log(resp);

      //console.log(resp.abilities);
    })
  } */
}

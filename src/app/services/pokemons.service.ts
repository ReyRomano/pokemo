import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, map } from "rxjs";
import { PokemonResponse } from '../interfaces/pokemon-response';
import { MundoPokemonComponent } from '../pages/mundo-pokemon/mundo-pokemon.component';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  //-------------------------------Inicio edito: No fue necesario
  private baseUrl: string = 'https://pokeapi.co/api';
  //----------------------------Fin edito

  constructor( private http: HttpClient ) { }

  getPokemon():Observable<PokemonResponse> {

    //Original:  --------------return this.http.get<PokemonResponse>('https://pokeapi.co/api/v2/pokemon');  //Endpoint aqui

    //  ---------------------------Edito:----------- Y está bien:

    //Constantes para mi direccion d mi api:
    // const baseUrl: string = 'https://pokeapi.co/api';
    let primerPokemon: number = 0;
    // DESCOMENTARRR:  let ultimoPokemon: number = 250;
    let ultimoPokemon: number = 250;

    return this.http.get<PokemonResponse>(`${this.baseUrl}/v2/pokemon?offset=${primerPokemon}&limit=${ultimoPokemon}`);  //Endpoint aqui
    //El enlace original: https://pokeapi.co/api/v2/pokemon?offset=0&limit=50

    // ------------------------Fin Edito ------------------------
  }

  getCaracterisiticas(nombre: string) {

    // return this.http.get(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
    return this.http.get(`${this.baseUrl}/v2/pokemon/${nombre}`);

  }


  //  ---------------  Edito XX: No responde la API con nombres de pokemons a medias ------------
  // getBuscarPokemon(texto: string ):Observable<PokemonResponse> {

  //   return this.http.get<PokemonResponse>(`https://pokeapi.co/api/v2/pokemon/${texto}`);  //Endpoint aqui
  // }
  //  -------------  Fin edito  ---------------



}

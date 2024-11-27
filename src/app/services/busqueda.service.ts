import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

const baseUrl: string = 'https://pokeapi.co/api';

@Injectable({
  providedIn: 'root'
})
export class BusquedaService {

  constructor( private http: HttpClient) { }

  //XX:    private transformarPokemons( resultados: any[] ): Pokemon[] {
  private transformarPokemons( resultados: any[] ) {
    //return [];
    console.log("Resultados: busqueda service", resultados);
    return resultados;

  }

  buscar( texto: string = '') {
    //const baseUrl: string = 'https://pokeapi.co/api';
    let primerPokemon: number = 0;
    let ultimoPokemon: number = 250;

    const url = `${baseUrl}/v2/pokemon?offset=${primerPokemon}&limit=${ultimoPokemon}`
    //Ó  const url = `https://pokeapi.co/api/v2/pokemon/${nombre}`

    return this.http.get<any>(url)
    .pipe(
      map( ( resp: any ) => resp.resultados )    
    );
  }

}

import { Component, OnInit,  } from '@angular/core';
//import { Ability } from 'src/app/interfaces/pokemon-response';
import { Pokemon } from '../../interfaces/pokemon-response';
import { PokemonsService } from '../../services/pokemons.service';

//  ---------------- Inicio Edito Ok ---------------
import { catchError, map, of } from 'rxjs';
//  --------------------- Fin edito Ok  -------------------

@Component({
  selector: 'app-mundo-pokemon',
  templateUrl: './mundo-pokemon.component.html',
  styleUrls: ['./mundo-pokemon.component.css']
})

// export class MundoPokemonComponent implements OnInit {
export class MundoPokemonComponent implements OnInit {

  public pokemons: Pokemon[] = [];

  public cargando: boolean = true;

  constructor( private PokemonsService: PokemonsService ) {}

  ngOnInit(): void {
    
    this.cargandoData();

  }

cargandoData() {

  this.PokemonsService.getPokemon()  //::::::::  Tipo cargarMedicos      
    .pipe(
      map((resp: any) => resp.results),  // Transforma la respuesta: Usa map para extraer la propiedad results de la respuesta.    
      
      catchError(error => {  // Usa 'catchError' para capturar y manejar cualquier error
        console.error('Error:', error);
        return of([]);  // Devuelve un observable con un array vacío si hay un error
      })
    )  
    // .subscribe( (resp: PokemonResponse) => {  //Llamo 'subscribe' para disparar la funcion hhtp de un observable 
    .subscribe( (results:any) => {

      results.forEach((element:any) => {
        //console.log("resultado de API",element.name);
  
        this.PokemonsService.getCaracterisiticas(element.name)
        .subscribe( (resp:any) => {
  
          this.pokemons.push({name: element.name, tipo: resp.types, habilidad: resp.abilities})

          if (this.pokemons.length == 50) {
            this.cargando=false;          
          }
        })  
        // this.cargando=false;
      });

      console.log("resultado de API",this.pokemons);
      
  });

}

}

import { Component, OnInit,  } from '@angular/core';
//import { Ability } from 'src/app/interfaces/pokemon-response';
import { Pokemon, Type } from '../../interfaces/pokemon-response';
import { PokemonsService } from '../../services/pokemons.service';
import { Ability } from 'src/app/interfaces/pokemon-response';
import { ActivatedRoute } from '@angular/router';

//  ---------------- Inicio Edito Ok ---------------
import { BusquedaService } from 'src/app/services/busqueda.service';
import { catchError, delay, map, of } from 'rxjs';
//  --------------------- Fin edito Ok  -------------------

@Component({
  selector: 'app-mundo-pokemon',
  templateUrl: './mundo-pokemon.component.html',
  styleUrls: ['./mundo-pokemon.component.css']
})

// export class MundoPokemonComponent implements OnInit {
export class MundoPokemonComponent implements OnInit {

  public pokemons: Pokemon[] = [];

  public abilitys: Ability[] = [];

  // public filteredCoins: ICoin[] = [];
  public filteredPokemons: Pokemon[] = [];

  // --------------------------------------- Inicio Edito Ok:  -------------------->
  
  public page: number | undefined;
  
  public cargando: boolean = true;
  
  // --------------------------------------- Fin Edito Ok:  -------------------->

  constructor( private PokemonsService: PokemonsService, 
              private Activatedrouter: ActivatedRoute,
              private busquedaService: BusquedaService ) {}

  ngOnInit(): void {
    
    this.cargandoData();

    this.Activatedrouter.params.subscribe( params => {
    //console.log(params);
  
    /*this.pokemonsService.buscarPokemons( params['texto'] ).subscribe( (pokemons: any) => {
      console.log(pokemons);
    })*/

    });

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
      
      //this.pokemons=resp.results;
      //this.abilitys = resp.abilities;
    
  });

}

//  ---------------------  Inicio Edito Ok:  ------------
// Buscar Pokemon de mi propio arreglo:

buscarNombre(texto: string ){

  texto = texto.trim();  //Borra espacios delante y detras
  if (texto.length === 0){  //Si no pone nada, no mandará nada
    return;
  }
  console.log("texto: ", texto);

  // this.coins = this.coins.filter( coin => //: Vas a filtrar
  this.filteredPokemons = this.pokemons.filter( pokemon => //: Vas a filtrar
    pokemon.name?.toLowerCase().includes( texto.toLowerCase() )   //:El nombre de pokemon('pokemon.name?') lo vas a convertir primero a minúscula('.toLowerCase()'), y si éste  incluye el texto buscado convertido en minusc también('.includes( this.searchText.toLowerCase())')
    // coin.symbol?.toLowerCase().includes( this.searchText.toLowerCase() )  //:El símbolo de coin('coin.symbol?') lo vas a convertir primero a minúscula('.toLowerCase()'), y si éste  incluye el texto buscado convertido en minusc también('.includes( this.searchText.toLowerCase())')
  );
  console.log("Encontradas: ", this.filteredPokemons );
  
}
//  ---------------------  Fin Edito Ok  ------------


/*  buscarHabilidad( texto: string ) {

  texto = texto.trim();  //Borra espacios delante y detras
  if (texto.length === 0){
    return;
  }
  console.log(texto);

  //this.router.navigate(['/pokemon', texto ]);
}  */

  // Hacer tabla para pokemonsCapturados
  

}

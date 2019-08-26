import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) { }

  getPokemonByNome(nomePokemon) {
    return this.httpClient.get<any>(`https://pokeapi.co/api/v2/pokemon/${nomePokemon}`);
  }

  getPokemonById(idPokemon) {
    return this.httpClient.get<any>(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`);
  }

  getPokemonSpecies(idPokemon) {
    return this.httpClient.get<any>(`https://pokeapi.co/api/v2/pokemon-species/${idPokemon}/`);
  }

  getPokemon(offset) {
    return this.httpClient.get<any>(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`);
  }
}

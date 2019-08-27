import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isArray } from 'util';
import { environment } from 'src/environments/environment';

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

  verifyFavorite(id) {
    const favorites = JSON.parse(localStorage.getItem(environment.local_favorite));
    if (favorites && isArray(favorites)) {
      return favorites.some(idFavorite => {
        if (idFavorite === id) {
          return true;
        }
        return false;
      });
    } else {
      return false;
    }
  }

  addFavorite(id) {
    let favorites = JSON.parse(localStorage.getItem(environment.local_favorite));
    if (favorites && isArray(favorites)) {
      favorites.push(id);
      localStorage.setItem(environment.local_favorite, JSON.stringify(favorites));
    } else {
      favorites = [id];
      localStorage.setItem(environment.local_favorite, JSON.stringify([id]));
    }
  }

  removeFavorite(id) {
    const favorites = JSON.parse(localStorage.getItem(environment.local_favorite));
    if (favorites && isArray(favorites)) {
      const index = favorites.indexOf( 10 );
      favorites.splice(index, 1);
      localStorage.setItem(environment.local_favorite, JSON.stringify(favorites));
    }
  }

}

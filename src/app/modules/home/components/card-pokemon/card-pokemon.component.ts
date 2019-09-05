import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { PokemonService } from 'src/app/core/services/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.scss']
})
export class CardPokemonComponent implements OnInit {
  @Input() name;
  @Input() page;
  loading = false;
  pokemon;
  descriptionPokemon;
  infoPokemon;
  urlImage;
  typesPokemon = [];
  constructor(
    private pokemonService: PokemonService,
    private router: Router) { }

  ngOnInit() {
    this.init();
  }

  init() {
    this.loading = true;
    this.pokemonService.getPokemonByNome(this.name).subscribe(pokemon => {
      this.pokemon = pokemon;
      this.pokemon.favorite = this.pokemonService.verifyFavorite(pokemon.id);
      this.getType(pokemon);
      this.pokemonService.getPokemonSpecies(pokemon.id).subscribe(specie => {
        this.getInfo(specie);
        this.getImage(specie);
        this.loading = false;
      }, err => {
        this.loading = false;
      });
    }, err => this.loading = false);
  }

  selectPokemon(id) {
    this.router.navigate(['pokemon', id]);
  }

  getInfo(pokemon) {
    let descriptions = [];
    let infos = [];

    if (!pokemon.flavor_text_entries) { return; }
    infos = pokemon.flavor_text_entries;
    const infosFiltrados = infos.filter((texto) => {
      return texto.language.name === 'en' && texto.version.name === 'emerald';
    });

    descriptions = pokemon.genera;
    const descriptionsfilters = descriptions.filter((descricao) => {
      return descricao.language.name === 'en';
    });

    this.descriptionPokemon = descriptionsfilters[0].genus;
    if (!infosFiltrados[0] || !infosFiltrados[0].flavor_text) { return; }
    this.infoPokemon = infosFiltrados[0].flavor_text;
  }

  getImage(pokemon) {
    let numPokemon = '';
    if (pokemon.id < 10) {
      numPokemon = '00' + pokemon.id;
    }
    if (pokemon.id >= 10 && pokemon.id < 100) {
      numPokemon = '0' + pokemon.id;
    }
    if (pokemon.id >= 100) {
      numPokemon = pokemon.id;
    }

    this.urlImage = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${numPokemon}.png`;
  }

  getType(pokemon) {
    pokemon.types.map((t) => {
      this.typesPokemon.push(t.type.name);
    });
  }

  changeFavorite(pokemon) {
    if (pokemon.favorite) {
      pokemon.favorite = false;
      this.pokemonService.removeFavorite(pokemon.id);
    } else {
      pokemon.favorite = true;
      this.pokemonService.addFavorite(pokemon.id);
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/core/services/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  namePokemon: string;
  pokemonJSON: any;
  idPokemon: number;
  urlImagem: string;
  typesPokemon: string[] = [];
  weightPokemon: number;
  heightPokemon: number;
  textPokemon: string;
  descriptionPokemon: string;
  abiliitiesPokemon: any[] = [];
  navItemSelect = 'about';
  namePokemonCamel: string;
  statusBase: any[] = [];

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getPokemonPorQueryParameter()
      .subscribe(pokemonJSON => {
        this.pokemonJSON = pokemonJSON;
        this.pokemonJSON.favorite = this.pokemonService.verifyFavorite(this.pokemonJSON.id);
        this.getName(this.pokemonJSON);
        this.getImage(this.pokemonJSON);
        this.getType(this.pokemonJSON);
        this.getWeight(this.pokemonJSON);
        this.getHeight(this.pokemonJSON);
        this.getNum(this.pokemonJSON);
        this.getText(this.pokemonJSON);
        this.getAbiliities(this.pokemonJSON);
        this.getStatusBase(this.pokemonJSON);
      });
  }

  changeFocoNavItem(event) {
    const navItem = event.target as HTMLElement;
    if (navItem.id !== this.navItemSelect) {
      this.navItemSelect = navItem.id;
    }
  }

  getPokemonPorQueryParameter() {
    const queryParams = this.route.params;

    return queryParams
      .pipe(
        switchMap(param => {
          this.idPokemon = Number.parseInt(param.id, 10);
          return this.getPokemon(parseInt(param.id, 10));
        }));
  }

  getPokemon(id) {
    return this.pokemonService.getPokemonById(id);
  }

  getNum(pokemonJSON) {
    this.idPokemon = pokemonJSON.id;
  }

  getName(pokemonJSON) {
    this.namePokemon = pokemonJSON.name;
    this.namePokemonCamel = pokemonJSON.name.charAt(0).toUpperCase() + pokemonJSON.name.slice(1);
  }

  getAbiliities(pokemonJSON) {
    this.abiliitiesPokemon = pokemonJSON.abilities;
  }

  getImage(pokemonJSON) {
    let numPokemon = '';
    if (pokemonJSON.id < 10) {
      numPokemon = '00' + pokemonJSON.id;
    }
    if (pokemonJSON.id >= 10 && pokemonJSON.id < 100) {
      numPokemon = '0' + pokemonJSON.id;
    }
    if (pokemonJSON.id >= 100) {
      numPokemon = pokemonJSON.id;
    }

    this.urlImagem = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${numPokemon}.png`;
  }

  getType(pokemonJSON) {
    pokemonJSON.types.map((t) => {
      this.typesPokemon.push(t.type.name);
    });
  }

  getWeight(pokemonJSON) {
    this.weightPokemon = pokemonJSON.weight;
  }

  getHeight(pokemonJSON) {
    this.heightPokemon = pokemonJSON.height;
  }

  getText(pokemonJSON) {
    this.pokemonService.getPokemonSpecies(pokemonJSON.id)
      .subscribe(
        especieJSON => {
          let descriptions = [];
          let texts = [];

          texts = especieJSON.flavor_text_entries;
          const textsFilters = texts.filter((text) => {
            return text.language.name === 'en' && text.version.name === 'emerald';
          });

          descriptions = especieJSON.genera;
          const descriptionsFiltradas = descriptions.filter((description) => {
            return description.language.name === 'en';
          });

          this.descriptionPokemon = descriptionsFiltradas[0].genus;
          if (!textsFilters[0] || !textsFilters[0].flavor_text) { return; }
          this.textPokemon = textsFilters[0].flavor_text;
        });
  }

  getStatusBase(pokemonJSON) {
    this.statusBase = pokemonJSON.stats.reverse();
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
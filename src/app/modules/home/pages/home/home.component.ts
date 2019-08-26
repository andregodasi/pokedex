import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/core/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private pokemonService: PokemonService) { }
  page: any;
  currentPage = 0;
  ngOnInit() {
    this.pokemonService.getPokemon(0).subscribe(page => this.page = page);
  }

  pageChange(page: number) {
    this.currentPage = page;
    this.pokemonService.getPokemon(20 * (page - 1)).subscribe(data => this.page = data);
  }

}

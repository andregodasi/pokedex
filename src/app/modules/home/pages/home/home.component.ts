import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { PokemonService } from 'src/app/core/services/pokemon.service';
import { StateFooterService } from 'src/app/core/footer/state-footer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  page: any;
  currentPage = 0;
  subscription = new Subscription();
  @ViewChild('p', { static: false }) pagination: any;
  constructor(
    private pokemonService: PokemonService,
    private stateFooterService: StateFooterService) { }

  ngOnInit() {
    this.pokemonService.getPokemon(0).subscribe(page => this.page = page);
    this.subscription.add(this.stateFooterService.previous.subscribe(e => {
      const previous = document.getElementsByClassName('pagination-previous')[0] as HTMLElement;
      const aClick = previous.querySelector('a');
      if (aClick) {
        aClick.click();
      }
    })).add(this.stateFooterService.next.subscribe(e => {
      const next = document.getElementsByClassName('pagination-next')[0] as HTMLElement;
      const aClick = next.querySelector('a');
      if (aClick) {
        aClick.click();
      }
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  pageChange(page: number) {
    this.currentPage = page;
    this.pokemonService.getPokemon(20 * (page - 1)).subscribe(data => this.page = data);
  }

}

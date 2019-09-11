import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { PokemonService } from 'src/app/core/services/pokemon.service';
import { StateFooterService } from 'src/app/core/footer/state-footer.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

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
    private readonly route: ActivatedRoute,
    private stateFooterService: StateFooterService
  ) { }

  ngOnInit() {
    const pageDetail = this.route.snapshot.queryParamMap.get('page');
    this.currentPage = pageDetail ? Number(pageDetail) : 0;
    this.pokemonService.getPokemon(this.currentPage ? 20 * (this.currentPage - 1) : 0).subscribe(page => this.page = page);
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
    })).add(this.stateFooterService.home.subscribe(e => {
      this.scrollPage('container-pagination');
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  pageChange(page: number) {
    console.log(this.pagination);
    this.currentPage = page;
    this.pokemonService.getPokemon(20 * (page - 1)).subscribe(data => {
      this.page = data;
      this.scrollPage('container-pagination');
    });
  }

  scrollTo(element, to, duration) {
    if (duration <= 0) { return; }
    const difference = to - element.scrollTop;
    const perTick = difference / duration * 10;

    setTimeout(() => {
      element.scrollTop = element.scrollTop + perTick;
      if (element.scrollTop === to) { return; }
      this.scrollTo(element, to, duration - 10);
    }, 10);
  }

  scrollPage(nameContainer: string): void {
    const element = document.getElementById(nameContainer);
    const targeOffset = element.offsetTop - 90;
    const content = window.innerWidth > 480 ? document.documentElement : document.getElementById('content-container');
    this.scrollTo(content, targeOffset, 500);
  }

  getTotalPage() {

    let totalPage = 0;
    if (this.page && this.page.count) {
      totalPage = Math.ceil(this.page.count / 20);
    }
    return totalPage;
  }

}

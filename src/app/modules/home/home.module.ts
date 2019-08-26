import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import {NgxPaginationModule} from 'ngx-pagination';
import { CardPokemonComponent } from './components/card-pokemon/card-pokemon.component';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { SpinnerModule } from 'src/app/shared/components/spinner/spinner.module';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [HomeComponent, CardPokemonComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgxPaginationModule,
    PipesModule,
    SpinnerModule,
    CoreModule
  ]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './pages/detail/detail.component';
import { CoreModule } from 'src/app/core/core.module';
import { PokemonDetailRoutingModule } from './pokemon-detail-routing.module';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

@NgModule({
  declarations: [DetailComponent],
  imports: [
    PokemonDetailRoutingModule,
    PipesModule,
    CoreModule
  ]
})
export class PokemonDetailModule { }

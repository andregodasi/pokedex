import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HeaderComponent,
    loadChildren: './modules/home/home.module#HomeModule'
  },
  {
    path: 'pokemon',
    component: HeaderComponent,
    loadChildren: './modules/pokemon-detail/pokemon-detail.module#PokemonDetailModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

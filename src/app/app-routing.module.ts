import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './public_zone/heroes/heroes.component';
import { HeroDetailComponent } from './public_zone/hero/hero-detail.component';
import { GamesComponent } from './public_zone/games/games.component';
import { GameDetailComponent } from './public_zone/games/detail/game-detail.component';
import { DynamicListComponent } from './public_zone/dynamic_list/list.component';
import { ContactComponent } from './public_zone/contact/contact.component';
import { PageNotFoundComponent } from './core/page_not_found/page-not-found';

const routes: Routes = [
    { path: '', redirectTo: '/heroes', pathMatch: 'full' },
    { path: 'hero/:id', component: HeroDetailComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'games', component: GamesComponent },
    { path: 'game/:id', component: GameDetailComponent },
    { path: 'dynamic-list', component: DynamicListComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}

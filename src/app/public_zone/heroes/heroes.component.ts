import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../hero/hero';
import { HeroService } from '../hero/hero.service';

@Component({
    selector: 'heroes-page',
    template: `
    <top-nav></top-nav>
    
     <h2>My Heroes</h2>
     <ul class="heroes">
       <li *ngFor="let hero of heroes"
         [class.selected]="hero === selectedHero"
         (click)="onSelect(hero)">
         <span class="badge">{{hero.id}}</span> {{hero.name}}
       </li>
     </ul>
        
     <hero-detail [hero]="selectedHero"></hero-detail>  
   `,
    styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
    title = 'Tour of Heroes';
    heroes: Hero[];
    selectedHero: Hero;

    constructor(
        private heroService: HeroService,
        private router: Router
    ) {}

    getHeroes() {
        this.heroService.getHeroesHttp().then(
            heroes => this.heroes = heroes);
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
        this.router.navigate(['/hero', this.selectedHero.id]);
    }

    ngOnInit() {
        this.getHeroes();
    }

    ngOnDestroy(){ //on page leave
        console.log('page destory');
    }

}

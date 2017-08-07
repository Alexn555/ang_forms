import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Game } from './game';
import { GameService } from './game.service';

@Component({
    selector: 'my-games',
    template: `
    <top-nav></top-nav>
        
     <h2>Games board</h2>

     <input class="game_search" placeholder="type game name..." [(ngModel)]="search"/>

     <ul class="games">

       <li *ngFor="let game of games | searchPipe:'name':search | 
                paginate: { itemsPerPage: items_per_page, currentPage: page }"
         [class.selected]="game === selectedGame"
         (click)="onSelect(game)">
         <span class="badge">{{game.id}}</span> <span>{{game.name}}</span> -> rating: {{game.rating}}
       </li>
     </ul>
     
     <pagination-controls *ngIf="showPagination" class="game_pagination" (pageChange)="page = $event"></pagination-controls>

   `,
    styleUrls: ['./games.component.css']
}) //| searchPipe:'name':search <span [highlight]="search">{{game.name}}</span>
export class GamesComponent {
    title = 'Tour of Games';
    games: Game[];
    selectedGame: Game;
    showPagination: boolean = true;
    items_per_page: number = 5;

    constructor(
        private gameService: GameService,
        private router: Router,
    ) {}

    getGames(onDataFinished: any) {
        this.gameService.getGamesHttp().then(
          games => {
                this.games = games;
                onDataFinished(games);
          });
    }

    onSelect(game: Game): void {
        this.selectedGame = game;
        this.router.navigate(['/game', this.selectedGame.id]);
    }

    ngOnInit() {
        //get all games
        this.getGames(()=> {
            //set pagination
            this.setPagination();
        });
    }

    ngOnDestroy(){ //on page leave
        console.log('page destory');
    }

    setPagination(){
        if(!this.showPagination){
            console.log(' games length ' + this.games.length);
            this.items_per_page = this.games.length;
        }
    }

}

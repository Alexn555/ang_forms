import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Game } from '../game';
import { GameService } from '../game.service';

@Component({
    selector: 'game-detail',
    template: `
        <div *ngIf="game" class="jumbotron game-detail">
            <h2>{{game.name}} details</h2>
            <div>
                <span class="game_name"> {{game.name}} </span> <br/>
                <span class="game_rating"> {{game.rating}} </span> <br/>
                <span class="game_category"> {{game.category}} </span>
                <button (click)="goBack()">Back</button>
            </div>
        </div>
    `,
    styleUrls: ['./game.detail.scss']
})
export class GameDetailComponent {
    @Input() game: Game;

    constructor(
        private gameService: GameService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.gameService.getHero(+params.get('id')))
            .subscribe(game => this.game = game);
    }

    goBack(): void {
        this.location.back();
    }
}

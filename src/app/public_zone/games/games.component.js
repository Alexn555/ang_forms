"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var game_service_1 = require("./game.service");
var GamesComponent = (function () {
    function GamesComponent(gameService, router) {
        this.gameService = gameService;
        this.router = router;
        this.title = 'Tour of Games';
        this.showPagination = true;
        this.items_per_page = 5;
    }
    GamesComponent.prototype.getGames = function (onDataFinished) {
        var _this = this;
        this.gameService.getGamesHttp().then(function (games) {
            _this.games = games;
            onDataFinished(games);
        });
    };
    GamesComponent.prototype.onSelect = function (game) {
        this.selectedGame = game;
        this.router.navigate(['/game', this.selectedGame.id]);
    };
    GamesComponent.prototype.ngOnInit = function () {
        var _this = this;
        //get all games
        this.getGames(function () {
            //set pagination
            _this.setPagination();
        });
    };
    GamesComponent.prototype.ngOnDestroy = function () {
        console.log('page destory');
    };
    GamesComponent.prototype.setPagination = function () {
        if (!this.showPagination) {
            console.log(' games length ' + this.games.length);
            this.items_per_page = this.games.length;
        }
    };
    return GamesComponent;
}());
GamesComponent = __decorate([
    core_1.Component({
        selector: 'my-games',
        template: "\n    <top-nav></top-nav>\n        \n     <h2>Games board</h2>\n\n     <input class=\"game_search\" placeholder=\"type game name...\" [(ngModel)]=\"search\"/>\n\n     <ul class=\"games\">\n\n       <li *ngFor=\"let game of games | searchPipe:'name':search | \n                paginate: { itemsPerPage: items_per_page, currentPage: page }\"\n         [class.selected]=\"game === selectedGame\"\n         (click)=\"onSelect(game)\">\n         <span class=\"badge\">{{game.id}}</span> <span>{{game.name}}</span> -> rating: {{game.rating}}\n       </li>\n     </ul>\n     \n     <pagination-controls *ngIf=\"showPagination\" class=\"game_pagination\" (pageChange)=\"page = $event\"></pagination-controls>\n\n   ",
        styleUrls: ['./games.component.css']
    }) //| searchPipe:'name':search <span [highlight]="search">{{game.name}}</span>
    ,
    __metadata("design:paramtypes", [game_service_1.GameService,
        router_1.Router])
], GamesComponent);
exports.GamesComponent = GamesComponent;
//# sourceMappingURL=games.component.js.map
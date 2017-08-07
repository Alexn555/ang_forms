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
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var game_1 = require("../game");
var game_service_1 = require("../game.service");
var GameDetailComponent = (function () {
    function GameDetailComponent(gameService, route, location) {
        this.gameService = gameService;
        this.route = route;
        this.location = location;
    }
    GameDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.gameService.getHero(+params.get('id')); })
            .subscribe(function (game) { return _this.game = game; });
    };
    GameDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return GameDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", game_1.Game)
], GameDetailComponent.prototype, "game", void 0);
GameDetailComponent = __decorate([
    core_1.Component({
        selector: 'game-detail',
        template: "\n        <div *ngIf=\"game\" class=\"jumbotron game-detail\">\n            <h2>{{game.name}} details</h2>\n            <div>\n                <span class=\"game_name\"> {{game.name}} </span> <br/>\n                <span class=\"game_rating\"> {{game.rating}} </span> <br/>\n                <span class=\"game_category\"> {{game.category}} </span>\n                <button (click)=\"goBack()\">Back</button>\n            </div>\n        </div>\n    ",
        styleUrls: ['./game.detail.scss']
    }),
    __metadata("design:paramtypes", [game_service_1.GameService,
        router_1.ActivatedRoute,
        common_1.Location])
], GameDetailComponent);
exports.GameDetailComponent = GameDetailComponent;
//# sourceMappingURL=game-detail.component.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("../../common/util/index");
var games_1 = require("../../server/games");
var GameService = (function () {
    function GameService() {
    }
    GameService.prototype.getGames = function () {
        return Promise.resolve(games_1.GAMES);
    };
    // See the "Take it slow" appendix
    GameService.prototype.getGamesHttp = function () {
        var _this = this;
        return new Promise(function (resolve) {
            // Simulate server latency with 2 second delay
            setTimeout(function () { return resolve(_this.getGames()); }, index_1.getRandNumber(0.3, 0.8) * 1000);
        });
    };
    GameService.prototype.getHero = function (id) {
        return this.getGames()
            .then(function (games) { return games.find(function (game) { return game.id === id; }); });
    };
    return GameService;
}());
GameService = __decorate([
    core_1.Injectable()
], GameService);
exports.GameService = GameService;
//# sourceMappingURL=game.service.js.map
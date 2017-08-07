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
var heroes_1 = require("../../server/heroes");
var HeroService = (function () {
    function HeroService() {
    }
    HeroService.prototype.getHeroes = function () {
        return Promise.resolve(heroes_1.HEROES);
    };
    // See the "Take it slow" appendix
    HeroService.prototype.getHeroesHttp = function () {
        var _this = this;
        return new Promise(function (resolve) {
            // Simulate server latency with 2 second delay
            setTimeout(function () { return resolve(_this.getHeroes()); }, index_1.getRandNumber(1, 1.5) * 1000);
        });
    };
    HeroService.prototype.getHero = function (id) {
        return this.getHeroes()
            .then(function (heroes) { return heroes.find(function (hero) { return hero.id === id; }); })
            .catch(this.handleError);
    };
    HeroService.prototype.remove = function (id) {
        for (var i = heroes_1.HEROES.length - 1; i >= 0; i--) {
            if (heroes_1.HEROES[i].id === id) {
                heroes_1.HEROES.splice(i, 1);
                return true;
            }
        }
        this.handleError('err', 'Error finding id delete movement');
        return false;
    };
    HeroService.prototype.handleError = function (code, msg) {
        if (code === void 0) { code = 'err'; }
        if (msg === void 0) { msg = 'Common error'; }
        if (code === 'warn') {
            return console.warn(msg);
        }
        console.error(msg);
    };
    return HeroService;
}());
HeroService = __decorate([
    core_1.Injectable()
], HeroService);
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map
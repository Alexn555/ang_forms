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
var hero_service_1 = require("../hero/hero.service");
var HeroesComponent = (function () {
    function HeroesComponent(heroService, router) {
        this.heroService = heroService;
        this.router = router;
        this.title = 'Tour of Heroes';
    }
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroesHttp().then(function (heroes) { return _this.heroes = heroes; });
    };
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
        this.router.navigate(['/hero', this.selectedHero.id]);
    };
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.ngOnDestroy = function () {
        console.log('page destory');
    };
    return HeroesComponent;
}());
HeroesComponent = __decorate([
    core_1.Component({
        selector: 'heroes-page',
        template: "\n    <top-nav></top-nav>\n    \n     <h2>My Heroes</h2>\n     <ul class=\"heroes\">\n       <li *ngFor=\"let hero of heroes\"\n         [class.selected]=\"hero === selectedHero\"\n         (click)=\"onSelect(hero)\">\n         <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n       </li>\n     </ul>\n        \n     <hero-detail [hero]=\"selectedHero\"></hero-detail>  \n   ",
        styleUrls: ['./heroes.component.scss']
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService,
        router_1.Router])
], HeroesComponent);
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map
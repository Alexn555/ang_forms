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
var ng2_popup_1 = require("ng2-popup");
//import { NotificationService } from 'ng2-notify-popup';
var hero_1 = require("./hero");
var hero_service_1 = require("./hero.service");
var HeroDetailComponent = (function () {
    function HeroDetailComponent(heroService, route, location) {
        this.heroService = heroService;
        this.route = route;
        this.location = location;
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.heroService.getHero(+params.get('id')); })
            .subscribe(function (hero) { return _this.hero = hero; });
    };
    HeroDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    HeroDetailComponent.prototype.removeHero = function () {
        var _this = this;
        this.heroService.remove(this.hero.id);
        this.openPopup('small', 'Success remove', function () {
            _this.goBack();
        });
    };
    HeroDetailComponent.prototype.openPopup = function (size, title, callbackOnClose) {
        var _this = this;
        if (title === void 0) { title = 'A popup title'; }
        this.popup.open(ng2_popup_1.Ng2MessagePopupComponent, {
            classNames: size,
            title: title,
            message: "Successful Hero remove",
        });
        setTimeout(function () { _this.popup.close(); callbackOnClose(); }, 1000);
    };
    // to append in any other component.
    HeroDetailComponent.prototype.showModular = function (text, type) {
        //this.notify.show(text, { position:'top', duration:'2000', type: type, location: '#hero-detail' });
    };
    return HeroDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", hero_1.Hero)
], HeroDetailComponent.prototype, "hero", void 0);
__decorate([
    core_1.ViewChild(ng2_popup_1.Ng2PopupComponent),
    __metadata("design:type", ng2_popup_1.Ng2PopupComponent)
], HeroDetailComponent.prototype, "popup", void 0);
HeroDetailComponent = __decorate([
    core_1.Component({
        selector: 'hero-detail',
        templateUrl: './hero-detail.html',
        styleUrls: ['./hero.component.scss']
        //providers: [NotificationService]
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService,
        router_1.ActivatedRoute,
        common_1.Location])
], HeroDetailComponent);
exports.HeroDetailComponent = HeroDetailComponent;
//# sourceMappingURL=hero-detail.component.js.map
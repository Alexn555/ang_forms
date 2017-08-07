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
var index_1 = require("../../common/animations/index");
var list_service_1 = require("./list.service");
var CATEGORIES = {
    Cars: 'cars',
    Motocycles: 'motocycles'
};
var DynamicListComponent = (function () {
    function DynamicListComponent(dynamicListService) {
        this.dynamicListService = dynamicListService;
    }
    DynamicListComponent.prototype.ngOnInit = function () {
        this.getCategories();
        this.getCars();
        this.getMotocycles();
    };
    DynamicListComponent.prototype.getValueFromSelect = function (value) {
        console.log(value);
    };
    DynamicListComponent.prototype.getCategories = function () {
        var _this = this;
        this.dynamicListService.getCategories().then(function (categories) {
            _this.categories = categories;
        });
    };
    DynamicListComponent.prototype.getCars = function () {
        var _this = this;
        this.dynamicListService.getCars().then(function (cars) {
            _this.cars = cars;
        });
    };
    DynamicListComponent.prototype.getMotocycles = function () {
        var _this = this;
        this.dynamicListService.getMotocycles().then(function (motocycles) {
            _this.motocycles = motocycles;
        });
    };
    DynamicListComponent.prototype.onCategoryChange = function (category) {
        this.selectedCategory = category;
        this.isSelectedCars = false;
        this.isSelectedMotocycles = false;
        if (this.selectedCategory === CATEGORIES.Cars) {
            this.isSelectedCars = true;
        }
        else if (this.selectedCategory === CATEGORIES.Motocycles) {
            this.isSelectedMotocycles = true;
        }
    };
    return DynamicListComponent;
}());
DynamicListComponent = __decorate([
    core_1.Component({
        selector: 'dynamic-list-page',
        animations: [
            core_1.trigger('myEnterAnimation', [
                core_1.transition(':enter', [
                    core_1.style({ transform: 'translateX(100%)', opacity: 0 }),
                    core_1.animate('300ms', core_1.style({ transform: 'translateX(0)', 'opacity': 1 }))
                ]),
                core_1.transition(':leave', [
                    core_1.style({ transform: 'translateX(0)', 'opacity': 1 }),
                    core_1.animate('300ms', core_1.style({ transform: 'translateX(100%)', 'opacity': 0 }))
                ])
            ]),
            index_1.fadeInAnimation,
            index_1.fadeInAnimationLight
        ],
        template: "\n      <div class=\"jumbotron dynamic-list\">\n          <h1> Dynamic list page </h1>\n          <p>    \n              <select [(ngModel)]=\"selectedCategory\" (ngModelChange)=\"onCategoryChange($event)\" >\n                 <option *ngFor=\"let c of categories\" [ngValue]=\"c.name\">\n                     {{c.name}}\n                 </option>\n              </select>\n            \n              <button (click)=\"getValueFromSelect(selectedCategory)\">click me</button>\n          </p>\n         \n         \n         <div *ngIf=\"isSelectedCars\" [@myFadeInAnimation]>   \n            <select [(ngModel)]=\"selectedCar\">\n              <option *ngFor=\"let car of cars\" [ngValue]=\"car\">\n                 {{car.name}}\n              </option>\n            </select>\n         </div>\n         \n         \n          <div *ngIf=\"isSelectedMotocycles\" [@myFadeInAnimation]>   \n            <select [(ngModel)]=\"selectedMoto\">\n              <option *ngFor=\"let moto of motocycles\" [ngValue]=\"moto\">\n                 {{moto.name}}\n              </option>\n            </select>\n         </div>\n         \n\n      </div>\n    ",
        styleUrls: ['./list.component.scss']
    }),
    __metadata("design:paramtypes", [list_service_1.DynamicListService])
], DynamicListComponent);
exports.DynamicListComponent = DynamicListComponent;
//# sourceMappingURL=list.component.js.map
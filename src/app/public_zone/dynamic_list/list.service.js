"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dynamic_list_1 = require("./dynamic.list");
var DynamicListService = (function () {
    function DynamicListService() {
    }
    DynamicListService.prototype.getCategories = function () {
        return Promise.resolve(dynamic_list_1.Categories);
    };
    DynamicListService.prototype.getCars = function () {
        return Promise.resolve(dynamic_list_1.Cars);
    };
    DynamicListService.prototype.getMotocycles = function () {
        return Promise.resolve(dynamic_list_1.Motocycles);
    };
    return DynamicListService;
}());
DynamicListService = __decorate([
    core_1.Injectable()
], DynamicListService);
exports.DynamicListService = DynamicListService;
//# sourceMappingURL=list.service.js.map
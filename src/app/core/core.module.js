"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var top_nav_component_1 = require("./top_nav/top_nav.component");
var footer_component_1 = require("./footer/footer.component");
var page_not_found_1 = require("./page_not_found/page-not-found");
var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, router_1.RouterModule],
        declarations: [top_nav_component_1.TopNavComponent, footer_component_1.FooterComponent, page_not_found_1.PageNotFoundComponent],
        exports: [top_nav_component_1.TopNavComponent, footer_component_1.FooterComponent, page_not_found_1.PageNotFoundComponent]
    })
], CoreModule);
exports.CoreModule = CoreModule;
//# sourceMappingURL=core.module.js.map
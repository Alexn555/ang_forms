"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TopNavComponent = (function () {
    function TopNavComponent() {
    }
    return TopNavComponent;
}());
TopNavComponent = __decorate([
    core_1.Component({
        selector: 'top-nav',
        template: "\n      <nav class=\"navbar navbar-default navbar-fixed-top\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <span class=\"navbar-brand\" href=\"#\">Bootstrap theme</span>\n        </div>\n        <div id=\"navbar\" class=\"navbar-collapse collapse\">\n          <ul class=\"nav navbar-nav\">\n            <li><a routerLink=\"/\" routerLinkActive=\"active\">Home</a></li>\n            <li><a routerLink=\"/heroes\" routerLinkActive=\"active\">Heroes</a></li>\n            <li><a routerLink=\"/games\" routerLinkActive=\"active\">Games</a></li> \n            <li><a routerLink=\"/dynamic-list\" routerLinkActive=\"active\">Dynamic list</a></li>           \n            <li><a routerLink=\"/contact\" routerLinkActive=\"active\">Contact</a></li>  \n          </ul>\n        </div><!--/.nav-collapse -->\n      </div>\n    </nav>\n  ",
        styleUrls: ['./top_nav.component.scss']
    })
], TopNavComponent);
exports.TopNavComponent = TopNavComponent;
//# sourceMappingURL=top_nav.component.js.map
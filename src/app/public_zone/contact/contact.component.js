"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ContactComponent = (function () {
    function ContactComponent() {
        this.isPlain = true;
        this.isReactive = false;
    }
    return ContactComponent;
}());
ContactComponent = __decorate([
    core_1.Component({
        selector: 'contact-page',
        template: "\n      <div  class=\"jumbotron contact_page\">\n           <h3> Send message </h3>\n           <p> <span class=\"form_title\"> Please fill form below </span> </p>\n              \n           <contact-form *ngIf=\"isPlain\"> </contact-form>\n         \n           <contact-form-reactive *ngIf=\"isReactive\"> </contact-form-reactive>\n\n      </div>\n    ",
        styleUrls: ['./contact.component.scss']
    })
], ContactComponent);
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map
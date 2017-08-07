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
var index_1 = require("../../../common/animations/index");
var contact_form_service_1 = require("./contact_form.service");
var contact_form_1 = require("./contact_form");
var ContactFormComponent = (function () {
    function ContactFormComponent(formService) {
        this.formService = formService;
        this.cntform = contact_form_1.ContactForm;
    }
    ContactFormComponent.prototype.ngOnInit = function () {
        this.getCountries();
    };
    ContactFormComponent.prototype.getValueFromSelect = function (value) {
        console.log(value);
    };
    ContactFormComponent.prototype.getCountries = function () {
        var _this = this;
        this.formService.getCountries().then(function (countries) {
            _this.countries = countries;
            //init selected value
            _this.cntform.country = _this.countries[0].name;
        });
    };
    ContactFormComponent.prototype.submitForm = function () {
        var isValidName = this.cntform.name.length > 3;
        if (isValidName) {
            console.log(' successful submit ' + JSON.stringify(this.cntform));
        }
    };
    ContactFormComponent.prototype.onCountryChange = function (country) {
        console.log(' country ' + country);
    };
    return ContactFormComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ContactFormComponent.prototype, "cntform", void 0);
ContactFormComponent = __decorate([
    core_1.Component({
        selector: 'contact-form',
        animations: [
            index_1.fadeInAnimation,
            index_1.fadeInAnimationLight
        ],
        template: "\n      <div class=\"jumbotron contact-form\">\n \n         <div class=\"container\">\n            <div class=\"col-md-6\">\n                <div class=\"form-area\">  \n                    <form role=\"form\">\n                    <br style=\"clear:both\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" [(ngModel)]=\"cntform.name\" class=\"form-control\" name=\"name\" placeholder=\"Name\" required>\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"text\" [(ngModel)]=\"cntform.email\" class=\"form-control\" name=\"email\" placeholder=\"Email\" required>\n                         </div>\n                         <div class=\"form-group\">\n                            <input type=\"text\" [(ngModel)]=\"cntform.telephone\" class=\"form-control\" name=\"telephone\" placeholder=\"Mobile Number\" required>\n                         </div>\n                           \n                          <div class=\"form-group\">\n                             <select [(ngModel)]=\"cntform.country\" name=\"countries\" (ngModelChange)=\"onCountryChange($event)\" >\n                                <option *ngFor=\"let c of countries\" [ngValue]=\"c.name\">\n                                 {{c.name}}\n                                 </option>\n                              </select>\n                         </div>\n                         \n                         <div class=\"form-group\">\n                            <input type=\"text\" [(ngModel)]=\"cntform.subject\" class=\"form-control\" name=\"subject\" placeholder=\"Subject\" required>\n                         </div>\n                         <div class=\"form-group\">\n                            <textarea class=\"form-control\" [(ngModel)]=\"cntform.message\"  type=\"textarea\" name=\"message\" placeholder=\"Message\" maxlength=\"140\" rows=\"5\"></textarea>\n                         </div>\n\n                        <button type=\"button\" (click)=\"submitForm($event)\" id=\"submit\" name=\"submit\" class=\"btn btn-primary pull-right\">Submit Form</button>\n                    </form>\n                </div>\n              </div>\n            </div>\n    \n\n      </div>\n    ",
        styleUrls: ['./contact_form.component.scss']
    }),
    __metadata("design:paramtypes", [contact_form_service_1.ContactFormService])
], ContactFormComponent);
exports.ContactFormComponent = ContactFormComponent;
//# sourceMappingURL=contact_form.component.js.map
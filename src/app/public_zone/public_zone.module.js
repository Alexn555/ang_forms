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
var forms_1 = require("@angular/forms");
var ngx_pagination_1 = require("ngx-pagination");
//notify popup
var ng2_notify_popup_1 = require("ng2-notify-popup");
var ng2_popup_1 = require("ng2-popup");
var core_module_1 = require("../core/core.module");
var index_1 = require("../common/modules/ngx-highlight/index");
var search_pipe_1 = require("../common/pipes/search.pipe");
var highlight_pipe_1 = require("../common/pipes/highlight.pipe");
var contact_component_1 = require("./contact/contact.component");
var contact_form_component_1 = require("./contact/form_template/contact_form.component");
var contact_form_service_1 = require("./contact/form_template/contact_form.service");
var contact_form_component_2 = require("./contact/form_reactive/contact_form.component");
var list_component_1 = require("./dynamic_list/list.component");
var list_service_1 = require("./dynamic_list/list.service");
var heroes_component_1 = require("./heroes/heroes.component");
var hero_service_1 = require("./hero/hero.service");
var hero_detail_component_1 = require("./hero/hero-detail.component");
var games_component_1 = require("./games/games.component");
var game_service_1 = require("./games/game.service");
var game_detail_component_1 = require("./games/detail/game-detail.component");
var PublicZoneModule = (function () {
    function PublicZoneModule() {
    }
    return PublicZoneModule;
}());
PublicZoneModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            router_1.RouterModule,
            ng2_notify_popup_1.NgNotifyPopup,
            ng2_popup_1.Ng2PopupModule,
            ngx_pagination_1.NgxPaginationModule,
            index_1.HighlightModule,
            core_module_1.CoreModule
        ],
        declarations: [
            contact_component_1.ContactComponent,
            contact_form_component_2.ContactFormReactiveComponent,
            contact_form_component_1.ContactFormComponent,
            list_component_1.DynamicListComponent,
            heroes_component_1.HeroesComponent,
            hero_detail_component_1.HeroDetailComponent,
            search_pipe_1.SearchPipe,
            highlight_pipe_1.HighlightPipe,
            games_component_1.GamesComponent,
            game_detail_component_1.GameDetailComponent
        ],
        providers: [
            hero_service_1.HeroService,
            contact_form_service_1.ContactFormService,
            list_service_1.DynamicListService,
            game_service_1.GameService
        ],
        exports: [
            contact_component_1.ContactComponent,
            contact_form_component_2.ContactFormReactiveComponent,
            contact_form_component_1.ContactFormComponent,
            list_component_1.DynamicListComponent,
            heroes_component_1.HeroesComponent,
            hero_detail_component_1.HeroDetailComponent,
            games_component_1.GamesComponent,
            game_detail_component_1.GameDetailComponent
        ]
    })
], PublicZoneModule);
exports.PublicZoneModule = PublicZoneModule;
//# sourceMappingURL=public_zone.module.js.map
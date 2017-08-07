import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';

//notify popup
import { NgNotifyPopup } from 'ng2-notify-popup';
import { Ng2PopupModule } from 'ng2-popup';

import { CoreModule } from '../core/core.module';

import { HighlightModule } from '../common/modules/ngx-highlight/index';
import { SearchPipe } from '../common/pipes/search.pipe';
import { HighlightPipe } from '../common/pipes/highlight.pipe';

import { ContactComponent } from './contact/contact.component';
import { ContactFormComponent } from './contact/form_template/contact_form.component';
import { ContactFormService } from './contact/form_template/contact_form.service';
import { ContactFormReactiveComponent } from './contact/form_reactive/contact_form.component';

import { DynamicListComponent } from './dynamic_list/list.component';
import { DynamicListService } from './dynamic_list/list.service';

import { HeroesComponent } from './heroes/heroes.component';
import { HeroService } from './hero/hero.service';
import { HeroDetailComponent } from './hero/hero-detail.component';

import { GamesComponent } from './games/games.component';
import { GameService } from './games/game.service';
import { GameDetailComponent } from './games/detail/game-detail.component';


@NgModule({
    imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        NgNotifyPopup,
        Ng2PopupModule,
        NgxPaginationModule,
        HighlightModule,
        CoreModule
    ],
    declarations: [
        ContactComponent,
        ContactFormReactiveComponent,
        ContactFormComponent,
        DynamicListComponent,
        HeroesComponent,
        HeroDetailComponent,
        SearchPipe,
        HighlightPipe,
        GamesComponent,
        GameDetailComponent
    ],
    providers: [
        HeroService,
        ContactFormService,
        DynamicListService,
        GameService
    ],
    exports: [
        ContactComponent,
        ContactFormReactiveComponent,
        ContactFormComponent,
        DynamicListComponent,
        HeroesComponent,
        HeroDetailComponent,
        GamesComponent,
        GameDetailComponent
    ]
})
export class PublicZoneModule { }

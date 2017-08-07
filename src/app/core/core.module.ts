import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TopNavComponent } from './top_nav/top_nav.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page_not_found/page-not-found';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [TopNavComponent, FooterComponent, PageNotFoundComponent],
    exports: [TopNavComponent, FooterComponent, PageNotFoundComponent]
})
export class CoreModule { }

import 'rxjs/add/operator/switchMap';
import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Ng2MessagePopupComponent, Ng2PopupComponent} from 'ng2-popup';
//import { NotificationService } from 'ng2-notify-popup';

import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
    selector: 'hero-detail',
    templateUrl: './hero-detail.html',
    styleUrls: ['./hero.component.scss']
    //providers: [NotificationService]
})
export class HeroDetailComponent {
    @Input() hero: Hero;
    @ViewChild(Ng2PopupComponent) popup: Ng2PopupComponent;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location,
        //private notify: NotificationService
    ) {}

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
            .subscribe(hero => this.hero = hero);
    }

    goBack(): void {
        this.location.back();
    }

    removeHero(): void {
       this.heroService.remove(this.hero.id);
       this.openPopup('small', 'Success remove', ()=> {
           this.goBack();
       });
    }


    openPopup(size: string, title: string = 'A popup title', callbackOnClose: any) {
        this.popup.open(Ng2MessagePopupComponent, {
            classNames: size,
            title: title,
            message: "Successful Hero remove",
            /*buttons: {
                OK: () => {
                this.message = "Ok button is pressed";
                this.popup.close(); }
            }*/
        });
        setTimeout(()=> { this.popup.close(); callbackOnClose(); } , 1000);
    }

    // to append in any other component.
    showModular(text: string, type: string): void {
        //this.notify.show(text, { position:'top', duration:'2000', type: type, location: '#hero-detail' });
    }

}


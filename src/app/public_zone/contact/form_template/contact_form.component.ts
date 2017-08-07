import { Component, Input, OnInit,
    trigger, state, transition, style, animate
} from '@angular/core';

import { fadeInAnimation, fadeInAnimationLight } from '../../../common/animations/index';

import { ContactFormService } from './contact_form.service';

import {
    ContactForm, Country, Countries,
} from './contact_form';



@Component({
    selector: 'contact-form',
    animations: [
        fadeInAnimation,
        fadeInAnimationLight
    ],

    template: `
      <div class="jumbotron contact-form">
 
         <div class="container">
            <div class="col-md-6">
                <div class="form-area">  
                    <form role="form">
                    <br style="clear:both">
                        <div class="form-group">
                            <input type="text" [(ngModel)]="cntform.name" class="form-control" name="name" placeholder="Name" required>
                        </div>
                        <div class="form-group">
                            <input type="text" [(ngModel)]="cntform.email" class="form-control" name="email" placeholder="Email" required>
                         </div>
                         <div class="form-group">
                            <input type="text" [(ngModel)]="cntform.telephone" class="form-control" name="telephone" placeholder="Mobile Number" required>
                         </div>
                           
                          <div class="form-group">
                             <select [(ngModel)]="cntform.country" name="countries" (ngModelChange)="onCountryChange($event)" >
                                <option *ngFor="let c of countries" [ngValue]="c.name">
                                 {{c.name}}
                                 </option>
                              </select>
                         </div>
                         
                         <div class="form-group">
                            <input type="text" [(ngModel)]="cntform.subject" class="form-control" name="subject" placeholder="Subject" required>
                         </div>
                         <div class="form-group">
                            <textarea class="form-control" [(ngModel)]="cntform.message"  type="textarea" name="message" placeholder="Message" maxlength="140" rows="5"></textarea>
                         </div>

                        <button type="button" (click)="submitForm($event)" id="submit" name="submit" class="btn btn-primary pull-right">Submit Form</button>
                    </form>
                </div>
              </div>
            </div>
    

      </div>
    `,
    styleUrls: ['./contact_form.component.scss']
})
export class ContactFormComponent {
    @Input() cntform = ContactForm;
    countries: Country[];

    constructor(
        private formService: ContactFormService
    ) {}

    ngOnInit(){
        this.getCountries();
    }

    getValueFromSelect(value: string) {
        console.log(value);
    }

    getCountries(){
        this.formService.getCountries().then(
            countries => {
                this.countries = countries;
                //init selected value
                this.cntform.country = this.countries[0].name;
            });
    }

    submitForm(){
        let isValidName = this.cntform.name.length > 3;
        if(isValidName){
            console.log(' successful submit ' + JSON.stringify(this.cntform));
        }
    }

    onCountryChange(country: any){
        console.log(' country ' + country);
    }


}


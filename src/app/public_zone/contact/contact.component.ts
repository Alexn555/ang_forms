import { Component } from '@angular/core';

@Component({
    selector: 'contact-page',
    template: `
      <div  class="jumbotron contact_page">
           <h3> Send message </h3>
           <p> <span class="form_title"> Please fill form below </span> </p>
              
           <contact-form *ngIf="isPlain"> </contact-form>
         
           <contact-form-reactive *ngIf="isReactive"> </contact-form-reactive>

      </div>
    `,
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
    isPlain: boolean = true;
    isReactive: boolean = false;

}

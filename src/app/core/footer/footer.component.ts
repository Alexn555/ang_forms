import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'footer-component',
    template: `             	  
        <footer *ngIf="isVisible" class="footer navbar-fixed-bottom footer-page">
          <div class="container">
            <p class="text-muted">© 2017 Ang forms</p>
          </div>
        </footer>
    `,
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
    isVisible: boolean = true;

}

import { Component } from '@angular/core';

@Component({
    template: ` 
        <div class="jumbotron page_not_found">
             <h2>Page not found</h2>
        </div>
    `,
    styles: [`
        h2 { color: red; padding: 10px; }
        .page_not_found {
           padding: 20px;
           margin: 10px;
           background: #f2f2f2;
           border: 1px #000 dashed;
        }
    `]
})
export class PageNotFoundComponent {}

import { Component } from '@angular/core';

@Component({
    selector: 'top-nav',
    template: `
      <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <span class="navbar-brand" href="#">Bootstrap theme</span>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li><a routerLink="/" routerLinkActive="active">Home</a></li>
            <li><a routerLink="/heroes" routerLinkActive="active">Heroes</a></li>
            <li><a routerLink="/games" routerLinkActive="active">Games</a></li> 
            <li><a routerLink="/dynamic-list" routerLinkActive="active">Dynamic list</a></li>           
            <li><a routerLink="/contact" routerLinkActive="active">Contact</a></li>  
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
  `,
    styleUrls: ['./top_nav.component.scss']
})
export class TopNavComponent { }

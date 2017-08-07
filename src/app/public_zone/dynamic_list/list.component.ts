import { Component, Input, OnInit,
    trigger, state, transition, style, animate
} from '@angular/core';

import { fadeInAnimation, fadeInAnimationLight } from '../../common/animations/index';

import { DynamicListService } from './list.service';

import {
    Category, Categories,
    Car, Cars,
    Moto, Motocycles
} from './dynamic.list';


const CATEGORIES = {
    Cars: 'cars',
    Motocycles: 'motocycles'
}

@Component({
    selector: 'dynamic-list-page',
    animations: [
      trigger(
        'myEnterAnimation',
        [
            transition(
                ':enter', [
                    style({transform: 'translateX(100%)', opacity: 0}),
                    animate('300ms', style({transform: 'translateX(0)', 'opacity': 1}))
                ]
            ),
            transition(
                ':leave', [
                    style({transform: 'translateX(0)', 'opacity': 1}),
                    animate('300ms', style({transform: 'translateX(100%)', 'opacity': 0}))
                ]
            )]
       ),
        fadeInAnimation,
        fadeInAnimationLight
    ],

    template: `
      <div class="jumbotron dynamic-list">
          <h1> Dynamic list page </h1>
          <p>    
              <select [(ngModel)]="selectedCategory" (ngModelChange)="onCategoryChange($event)" >
                 <option *ngFor="let c of categories" [ngValue]="c.name">
                     {{c.name}}
                 </option>
              </select>
            
              <button (click)="getValueFromSelect(selectedCategory)">click me</button>
          </p>
         
         
         <div *ngIf="isSelectedCars" [@myFadeInAnimation]>   
            <select [(ngModel)]="selectedCar">
              <option *ngFor="let car of cars" [ngValue]="car">
                 {{car.name}}
              </option>
            </select>
         </div>
         
         
          <div *ngIf="isSelectedMotocycles" [@myFadeInAnimation]>   
            <select [(ngModel)]="selectedMoto">
              <option *ngFor="let moto of motocycles" [ngValue]="moto">
                 {{moto.name}}
              </option>
            </select>
         </div>
         

      </div>
    `,
    styleUrls: ['./list.component.scss']
})
export class DynamicListComponent {

    categories: Category[];
    cars: Car[];
    motocycles: Moto[];

    selectedCategory: string;
    selectedCar: string;
    selectedMoto: string;

    isSelectedCars: boolean;
    isSelectedMotocycles: boolean;

    constructor(
        private dynamicListService: DynamicListService
    ) {}

    ngOnInit(): void {
        this.getCategories();
        this.getCars();
        this.getMotocycles();
    }

    getValueFromSelect(value: string) {
        console.log(value);
    }


    getCategories() {
        this.dynamicListService.getCategories().then(
          categories => {
              this.categories = categories;
         });
    }

    getCars() {
        this.dynamicListService.getCars().then(
            cars => {
                this.cars = cars;
            });
    }

    getMotocycles() {
        this.dynamicListService.getMotocycles().then(
            motocycles => {
                this.motocycles = motocycles;
            });
    }

    onCategoryChange(category: any){
        this.selectedCategory = category;
        this.isSelectedCars = false;
        this.isSelectedMotocycles = false;
        if (this.selectedCategory === CATEGORIES.Cars) {
            this.isSelectedCars = true;
        }
        else if(this.selectedCategory === CATEGORIES.Motocycles) {
            this.isSelectedMotocycles = true;
        }
    }


}

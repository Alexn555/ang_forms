import { Injectable } from '@angular/core';

import {
    Category, Categories,
    Car, Cars,
    Moto, Motocycles
} from './dynamic.list';


@Injectable()
export class DynamicListService {
    getCategories(): Promise<Category[]> {
        return Promise.resolve(Categories);
    }

    getCars(): Promise<Car[]> {
        return Promise.resolve(Cars);
    }

    getMotocycles(): Promise<Moto[]> {
        return Promise.resolve(Motocycles);
    }

}

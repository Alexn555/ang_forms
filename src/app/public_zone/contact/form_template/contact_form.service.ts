import { Injectable } from '@angular/core';

import {
    Country, Countries,
} from './contact_form';


@Injectable()
export class ContactFormService {
    getCountries(): Promise<Country[]> {
        return Promise.resolve(Countries);
    }


}

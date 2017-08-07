
export class ContactForm2{
    name: string;
    email: string;
    telephone: string;
    country: string;
    subject: string;
    message: string;
}

export let ContactForm = {
    name: '',
    email: '',
    telephone: '',
    country: '',
    subject: '',
    message: ''
};

export class Country {
    id: number;
    name: string;
    population: number;
}

export const Countries: Country[] = [
    { id: 0, name: 'Select country', population: 2 },
    { id: 1, name: 'Estonia', population: 1.5 },
    { id: 2, name: 'Latvia', population: 2.5 },
    { id: 3, name: 'France', population: 60 }
];


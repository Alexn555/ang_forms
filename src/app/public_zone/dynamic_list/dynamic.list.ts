export class Category {
    id: number;
    name: string;
}

export const Categories: Category[] = [
    { id: 11, name: 'cars' },
    { id: 12, name: 'motocycles' },
    { id: 12, name: 'Hitman'  }
];

export class Car {
    id: number;
    name: string;
    fuel: string;
}

export const Cars: Car[] = [
    { id: 1, name: 'peugeot 207', fuel: 'petrol' },
    { id: 2, name: 'alfa romeo', fuel: 'disel' },
    { id: 3, name: 'hyundai i20', fuel: 'petrol' }
];


export class Moto {
    id: number;
    name: string;
    rating: number;
}

export const Motocycles: Moto[] = [
    { id: 1, name: 'Aprilla', rating: 1 },
    { id: 2, name: 'Scooter', rating: 100 },
    { id: 3, name: 'Hitman', rating: 100 }
];

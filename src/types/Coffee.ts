export interface CoffeeProps {
    id?: number,
    name: string;
    img: string;
    description: string;
    price: number;
    tags: string[];
}

export interface CoffeeType {
    coffee: CoffeeProps
}
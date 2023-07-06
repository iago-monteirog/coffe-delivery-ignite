import { Minus, Plus } from '@phosphor-icons/react';
import * as S from './styles';
import { useState } from 'react';

interface CoffeeListProps {
    id: number,
    name: string,
    price: number
}

export function Counter({ name, price }: any) {
    const [coffeeList, setCoffeeList] = useState<CoffeeListProps[]>([]);

    function handleAddCoffeeToCart() {
        const newCoffee: CoffeeListProps[] = [
            {
                id: coffeeList.length,
                name: name,
                price: price,
            }
        ];

        setCoffeeList([...coffeeList, ...newCoffee]);
    }

    function handleRemoveCoffeeToCart() {
        if (coffeeList.length === 0) return;

        const updatedCoffeeList = [...coffeeList];
        updatedCoffeeList.pop();

        setCoffeeList([...updatedCoffeeList]);
    }

    console.log(coffeeList);

    return (
        <S.Counter>
            <Minus size={22} weight='bold' onClick={handleRemoveCoffeeToCart} />
            <span>{coffeeList.length}</span>
            <Plus size={22} weight='bold' onClick={handleAddCoffeeToCart} />
        </S.Counter>
    );
}
import { Minus, Plus } from '@phosphor-icons/react';
import * as S from './styles';
import { useContext, useState } from 'react';
import { CoffeeShopContext } from '../../contexts/CoffeeShopContext';
import { CoffeeType } from '../../types/Coffee';


export function Counter({ coffee }: CoffeeType) {
    const { cartItems, setCartItems } = useContext(CoffeeShopContext);


    function handleAddCoffeeToCart() {

        const newCoffee = [
            {
                id: coffee.id,
                name: coffee.name,
                price: coffee.price,
            }
        ];


        setCartItems([...cartItems, ...newCoffee]);
    }

    function handleRemoveCoffeeToCart() {
        if (cartItems.length === 0) return;

        const updatedCoffeeList = [...cartItems];
        updatedCoffeeList.pop();

        setCartItems([...updatedCoffeeList]);

    }

    return (
        <S.Counter>
            <Minus size={22} weight='bold' onClick={handleRemoveCoffeeToCart} />
            <span>{cartItems.length}</span>
            <Plus size={22} weight='bold' onClick={handleAddCoffeeToCart} />
        </S.Counter>
    );
}
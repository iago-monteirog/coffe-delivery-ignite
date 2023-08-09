import { Minus, Plus } from '@phosphor-icons/react';
import * as S from './styles';
import { useContext, useState } from 'react';
import { CoffeeShopContext } from '../../contexts/CoffeeShopContext';
import { CoffeeType } from '../../types/Coffee';


export function Counter({ coffee }: CoffeeType) {
    const { cartItems, setCartItems } = useContext(CoffeeShopContext);

    const [quantitySelectedItem, setQuantitySelectedItem] = useState<number>(0);

    function handleAddCoffeeToCart() {

        const newCoffee = [
            {
                id: coffee.id,
                name: coffee.name,
                img: coffee.img,
                description: coffee.description,
                price: coffee.price,
                tags: coffee.tags
            }
        ];


        setCartItems([...cartItems, ...newCoffee]);

        setQuantitySelectedItem((state: number) => {
            return state + 1
        });
    }

    function handleRemoveCoffeeToCart() {
        if (cartItems.length === 0) return;

        const updatedCoffeeList = [...cartItems];
        updatedCoffeeList.pop();

        setCartItems([...updatedCoffeeList]);

        setQuantitySelectedItem((state: number) => {
            return state - 1;
        });
    }

    return (
        <S.Counter>
            <Minus size={22} weight='bold' onClick={handleRemoveCoffeeToCart} />
            <span>{quantitySelectedItem}</span>
            <Plus size={22} weight='bold' onClick={handleAddCoffeeToCart} />
        </S.Counter>
    );
}
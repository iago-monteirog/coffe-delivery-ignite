import { Minus, Plus } from '@phosphor-icons/react';
import * as S from './styles';
import { useContext, useEffect, useState } from 'react';
import { CoffeeShopContext } from '../../contexts/CoffeeShopContext';
import { CoffeeType } from '../../types/Coffee';
import { useLocation } from 'react-router-dom';


export function Counter({ coffee }: CoffeeType) {
    const { cartItems, setCartItems, uniqueCartItems } = useContext(CoffeeShopContext);

    const [quantitySelectedItem, setQuantitySelectedItem] = useState<number>(0);

    const location = useLocation();


    useEffect(() => {
        if (location.pathname === '/checkout') {
            if (coffee.id !== undefined) {
                const filteredCoffee = uniqueCartItems.filter(item => item.item.id === coffee.id);

                setQuantitySelectedItem(filteredCoffee[0].quantity);
            }
        }
    }, [location, setQuantitySelectedItem])

    function handleAddCoffeeToCart() {
        if (coffee.id !== undefined) {
            const newCoffee = [
                {
                    id: coffee.id,
                    name: coffee.name,
                    img: coffee.img,
                    description: coffee.description,
                    price: coffee.price,
                    tags: coffee.tags,
                },
            ];

            setCartItems([...cartItems, ...newCoffee]);

            setQuantitySelectedItem((state: number) => {
                return state + 1;
            });
        }
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
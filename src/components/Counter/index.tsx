import { Minus, Plus } from '@phosphor-icons/react';
import * as S from './styles';
import { useContext } from 'react';
import { CoffeeShopContext } from '../../contexts/CoffeeShopContext';


export function Counter() {
    const { coffeeList, setCoffeeList } = useContext(CoffeeShopContext);

    function handleAddCoffeeToCart() {
        const newCoffee = [
            {
                id: coffeeList[0].id,
                name: coffeeList[0].name,
                img: coffeeList[0].img,
                description: coffeeList[0].description,
                price: coffeeList[0].price,
                tags: coffeeList[0].tags

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
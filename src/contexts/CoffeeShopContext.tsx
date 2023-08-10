import { ReactNode, createContext, useState } from "react";
import { CoffeeProps } from "../types/Coffee";

export interface CartItensProps {
    id: number,
    name: string;
    img: string;
    description: string;
    price: number;
    tags: string[];
}
interface UniqueCartItemsProps {
    item: CartItensProps;
    quantity: number;
}
interface CoffeeShopContextType {
    cartItems: CartItensProps[],
    setCartItems: (coffeList: CartItensProps[]) => void,
    coffeeList: CoffeeProps[],
    setCoffeeList: (coffeList: CoffeeProps[]) => void,
    uniqueCartItems: UniqueCartItemsProps[],
    setUniqueCartItems: (item: UniqueCartItemsProps[]) => void,
}


export const CoffeeShopContext = createContext({} as CoffeeShopContextType);

interface CoffeeShopContextProviderProps {
    children: ReactNode,
}

export function CoffeeShopContextProvider({ children }: CoffeeShopContextProviderProps) {
    const [cartItems, setCartItems] = useState<CartItensProps[]>([]);
    const [coffeeList, setCoffeeList] = useState<CoffeeProps[]>([]);
    const [uniqueCartItems, setUniqueCartItems] = useState<UniqueCartItemsProps[]>([]);

    return (
        <CoffeeShopContext.Provider
            value={{
                cartItems,
                setCartItems,
                coffeeList,
                setCoffeeList,
                uniqueCartItems,
                setUniqueCartItems
            }}
        >
            {children}
        </CoffeeShopContext.Provider>
    )
}
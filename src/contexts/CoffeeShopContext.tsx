import { ReactNode, createContext, useState } from "react";
import { CoffeeProps } from "../types/Coffee";

interface CartItensProps {
    id?: number,
    name: string;
    img: string;
    description: string;
    price: number;
    tags: string[];
}

interface CoffeeShopContextType {
    cartItems: CartItensProps[],
    setCartItems: (coffeList: CartItensProps[]) => void,
    coffeeList: CoffeeProps[],
    setCoffeeList: (coffeList: CoffeeProps[]) => void,
}


export const CoffeeShopContext = createContext({} as CoffeeShopContextType);

interface CoffeeShopContextProviderProps {
    children: ReactNode,
}

export function CoffeeShopContextProvider({ children }: CoffeeShopContextProviderProps) {
    const [cartItems, setCartItems] = useState<CartItensProps[]>([]);
    const [coffeeList, setCoffeeList] = useState<CoffeeProps[]>([]) 

    return (
        <CoffeeShopContext.Provider
            value={{
                cartItems,
                setCartItems,
                coffeeList,
                setCoffeeList
            }}
        >
            {children}
        </CoffeeShopContext.Provider>
    )
}
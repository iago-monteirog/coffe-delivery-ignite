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
export interface UniqueCartItemsProps {
    item: CartItensProps;
    quantity: number;
}

interface OrderProps {
    number: string;
    cep: string;
    street: string;
    district: string;
    city: string;
    state: string;
    paymentMethod: string;
    complement?: string;
}

interface CoffeeShopContextType {
    cartItems: CartItensProps[],
    setCartItems: (coffeList: CartItensProps[]) => void,
    coffeeList: CoffeeProps[],
    setCoffeeList: (coffeList: CoffeeProps[]) => void,
    uniqueCartItems: UniqueCartItemsProps[],
    setUniqueCartItems: (item: UniqueCartItemsProps[]) => void,
    order: OrderProps,
    setOrder: (order: OrderProps) => void,
}

export const CoffeeShopContext = createContext({} as CoffeeShopContextType);

interface CoffeeShopContextProviderProps {
    children: ReactNode,
}

export function CoffeeShopContextProvider({ children }: CoffeeShopContextProviderProps) {
    const [cartItems, setCartItems] = useState<CartItensProps[]>([]);
    const [coffeeList, setCoffeeList] = useState<CoffeeProps[]>([]);
    const [uniqueCartItems, setUniqueCartItems] = useState<UniqueCartItemsProps[]>([]);
    const [order, setOrder] = useState<OrderProps>({
        number: '',
        cep: '',
        street: '',
        district: '',
        city: '',
        state: '',
        paymentMethod: '',
    });

    return (
        <CoffeeShopContext.Provider
            value={{
                cartItems,
                setCartItems,
                coffeeList,
                setCoffeeList,
                uniqueCartItems,
                setUniqueCartItems,
                order,
                setOrder
            }}
        >
            {children}
        </CoffeeShopContext.Provider>
    )
}
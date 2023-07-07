import { ReactNode, createContext, useState } from "react";

interface CartItensProps {
    id?: number,
    name: string;
    price: number;
}

interface CoffeeShopContextType {
    cartItems: CartItensProps[],
    setCartItems: (coffeList: CartItensProps[]) => void;
}

export const CoffeeShopContext = createContext({} as CoffeeShopContextType);

interface CoffeeShopContextProviderProps {
    children: ReactNode,
}

export function CoffeeShopContextProvider({ children }: CoffeeShopContextProviderProps) {
    const [cartItems, setCartItems] = useState<CartItensProps[]>([]);

    return (
        <CoffeeShopContext.Provider
            value={{
                cartItems,
                setCartItems
            }}
        >
            {children}
        </CoffeeShopContext.Provider>
    )
}
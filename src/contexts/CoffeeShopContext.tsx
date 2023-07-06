import { ReactNode, createContext, useState } from "react";

export interface CoffeeProps {
    id?: number,
    name: string;
    img: string;
    description: string;
    price: number;
    tags: string[];
}

interface CoffeeShopContextType {
    coffeeList: CoffeeProps[],
    setCoffeeList: (coffeList: CoffeeProps[]) => void;
}

export const CoffeeShopContext = createContext({} as CoffeeShopContextType);

interface CoffeeShopContextProviderProps {
    children: ReactNode,
}

export function CoffeeShopContextProvider({ children }: CoffeeShopContextProviderProps) {
    const [coffeeList, setCoffeeList] = useState<CoffeeProps[]>([]);

    return (
        <CoffeeShopContext.Provider
            value={{
                coffeeList,
                setCoffeeList
            }}
        >
            {children}
        </CoffeeShopContext.Provider>
    )
}
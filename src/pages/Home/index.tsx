import * as S from './styles';
import coffeImage from '../../assets/coffe-image.svg';
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react';
import { CoffeeCard } from '../../components/CoffeeCard/index';
import { StyledCircle } from '../../styles/themes/styledCircles';
import { useContext, useEffect } from 'react';
import coffeeMenu from './caffeeMenu';
import { CoffeeShopContext } from '../../contexts/CoffeeShopContext';



export function Home() {

    const { coffeeList, setCoffeeList } = useContext(CoffeeShopContext);

    useEffect(() => {
        setCoffeeList(coffeeMenu);
    }, []);

    return (
        <S.HomeContainer>
            <S.HomePresentation>
                <S.PresentationContent>
                    <div className='first'>
                        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                    </div>

                    <div className='last'>
                        <S.StyledTags>
                            <StyledCircle circleColor='yellowDark'>
                                <ShoppingCart weight='fill' size={16} />
                            </StyledCircle>
                            <span>Compra simples e segura</span>
                        </S.StyledTags>

                        <S.StyledTags>
                            <StyledCircle circleColor='gray'>
                                <Package weight='fill' size={16} />
                            </StyledCircle>
                            <span>Embalagem mantém o café intacto</span>
                        </S.StyledTags>

                        <S.StyledTags>
                            <StyledCircle circleColor='brandYellow'>
                                <Timer weight='fill' size={16} />
                            </StyledCircle>
                            <span>Entrega rápida e rastreada</span>
                        </S.StyledTags>


                        <S.StyledTags>
                            <StyledCircle circleColor='purple'>
                                <Coffee weight='fill' size={16} />
                            </StyledCircle>
                            <span>O café chega fresquinho até você</span>
                        </S.StyledTags>
                    </div>
                </S.PresentationContent>

                <img src={coffeImage} alt="Copo de café com grãos de café" />
            </S.HomePresentation>

            <S.CafeMenu>
                <h3>Nossos Cafés</h3>
                <S.CoffeeContainer>
                    {coffeeList.map((coffee) => {
                        return (
                            <CoffeeCard
                                key={coffee.id}
                            />
                        )
                    })}
                </S.CoffeeContainer>
            </S.CafeMenu>
        </S.HomeContainer>
    )
}
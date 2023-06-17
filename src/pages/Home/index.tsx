import * as S from './styles';
import coffeImage from '../../assets/coffe-image.svg';
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react';

export function Home() {
    return (
        <S.HomeContainer>
            <S.HomePresentation>
                <S.PresentationContent>
                    <div>
                        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                    </div>

                    <div>
                        <S.StyledTags>
                            <ShoppingCart weight='fill' size={16} />
                            <span>Compra simples e segura</span>
                        </S.StyledTags>

                        <S.StyledTags>
                            <Timer weight='fill' size={16} />
                            <span>Entrega rápida e rastreada</span>
                        </S.StyledTags>

                        <S.StyledTags>
                            <Package weight='fill' size={16} />
                            <span>Embalagem mantém o café intacto</span>
                        </S.StyledTags>

                        <S.StyledTags>
                            <Coffee weight='fill' size={16} />
                            <span>O café chega fresquinho até você</span>
                        </S.StyledTags>
                    </div>
                </S.PresentationContent>

                <img src={coffeImage} alt="Copo de café com grãos de café" />
            </S.HomePresentation>

            <S.CafeMenu>
                <span>Nossos Cafés</span>
            </S.CafeMenu>
        </S.HomeContainer>
    )
}
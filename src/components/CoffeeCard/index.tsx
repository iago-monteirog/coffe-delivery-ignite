import * as S from './styles';
import { Counter } from '../Counter';
import { CoffeeType } from '../../types/Coffee';
import { CartButton } from '../CartButton';

export function CoffeeCard({ coffee }: CoffeeType) {

    const formattedPrice = coffee.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 });

    return (
        <S.CoffeeBox>
            <img src={coffee.img} alt="" />

            <S.Tags>
                {coffee.tags.map((tag, index) => {
                    return (
                        <S.CoffeeTag key={index}>
                            <span>{tag}</span>
                        </S.CoffeeTag>
                    )
                })}
            </S.Tags>

            <h4>{coffee.name}</h4>
            <p>{coffee.description}</p>

            <S.BuyBox>
                <p>R$<strong>{formattedPrice}</strong></p>

                <S.ActionsBox>
                    <Counter coffee={coffee} />
                    <CartButton />
                </S.ActionsBox>
            </S.BuyBox>
        </S.CoffeeBox>
    );
}
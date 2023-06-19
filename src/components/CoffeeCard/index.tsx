import * as S from './styles';
import expresso from '../../assets/expresso.png';

export function CoffeeCard() {
    return (
        <S.Container>
            <S.CoffeeBox>
                <img src={expresso} alt="Café Expresso" />

                <span>Tradicional</span>

                <h3>Expresso Tradicional</h3>
                <p>O tradicional café feito com água quente e grãos moídos</p>

                <div>
                    <span>R$9,90</span>
                </div>
            </S.CoffeeBox>
        </S.Container>
    );
}
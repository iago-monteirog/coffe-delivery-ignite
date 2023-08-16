import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react';
import { StyledCircle } from '../../styles/themes/styledCircles';
import * as S from './styles';
import deliveryImage from '../../assets/delivery-image.svg';
import { useContext, useEffect, useState } from 'react';
import { CoffeeShopContext } from '../../contexts/CoffeeShopContext';

export function Success() {
    const { order } = useContext(CoffeeShopContext);
    const [translatedPaymentMethod, setTranslatedPaymentMethod] = useState<string>('')

    useEffect(() => {
        if (order.paymentMethod === 'credit-card') setTranslatedPaymentMethod('Cartão de Crédito');
        if (order.paymentMethod === 'debit-card') setTranslatedPaymentMethod('Cartão de Débito');
        if (order.paymentMethod === 'cash') setTranslatedPaymentMethod('Dinheiro');
    }, []);

    return (
        <S.SuccessContainer>
            <S.ConfirmedContainer>
                <h3>Uhu! Pedido confirmado!</h3>
                <p>Agora é só aguardar que logo o café chegará até você</p>

                <S.OrderInfo>
                    <S.Row>
                        <StyledCircle circleColor='purple'>
                            <MapPin size={22} weight='fill' />
                        </StyledCircle>
                        <S.Infos>
                            <p>Entrega em <strong>{order.street}, {order.number}</strong></p>
                            <p>{order.district} - {order.city}, {order.state}</p>
                        </S.Infos>
                    </S.Row>

                    <S.Row>
                        <StyledCircle circleColor='brandYellow'>
                            <Timer size={22} weight='fill' />
                        </StyledCircle>
                        <S.Infos>
                            <p>Previsão de entrega</p>
                            <strong>20min - 30min</strong>
                        </S.Infos>
                    </S.Row>

                    <S.Row>
                        <StyledCircle circleColor='yellowDark'>
                            <CurrencyDollar size={22} />
                        </StyledCircle>
                        <S.Infos>
                            <p>Pagamento na entrega</p>
                            <strong>{translatedPaymentMethod}</strong>
                        </S.Infos>
                    </S.Row>
                </S.OrderInfo>
            </S.ConfirmedContainer>

            <img src={deliveryImage} alt="A man in a motocycle" />
        </S.SuccessContainer>
    )
}
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from '@phosphor-icons/react';
import * as S from '../../styles';
import { useFormContext } from 'react-hook-form';

export function CheckoutForm() {
    const { register } = useFormContext();

    return (
        <>
            <S.FormBox>
                <div className="tittle">
                    <MapPinLine size={22} />
                    <span>Endereço de Entrega</span>
                </div>

                <p>Informe o endereço onde deseja receber seu pedido</p>

                <div className="fields">
                    <S.StyledInput type='number' placeholder='CEP' id='cep' {...register('cep')} />
                    <S.StyledInput type='text' placeholder='Rua' id='street' {...register('street')} />
                    <S.StyledInput type='number' placeholder='Número' id='number' {...register('number')} />
                    <S.StyledInput type='text' placeholder='Complemento' id='complement' {...register('complement')} required={false} />
                    <S.StyledInput type='text' placeholder='Bairro' id='district' {...register('district')} />
                    <S.StyledInput type='text' placeholder='Cidade' id='city' {...register('city')} />
                    <S.StyledInput type='text' placeholder='UF' id='state' {...register('state')} />
                </div>
            </S.FormBox>

            <S.PaymentBox>
                <div className="tittle">
                    <CurrencyDollar size={22} />
                    <span>Pagamento</span>
                </div>

                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                <S.RadiosContainer>
                    <label htmlFor="credit">
                        <input type="radio" name='paymentMethod' id='credit' />
                        <S.RadioPaymentBox>
                            <CreditCard size={16} />
                            <span>Cartão de crédito</span>
                        </S.RadioPaymentBox>
                    </label>
                    <label htmlFor="debit">
                        <input type="radio" name='paymentMethod' id='debit' />
                        <S.RadioPaymentBox>
                            <Bank size={16} />
                            <span>Cartão de débito</span>
                        </S.RadioPaymentBox>
                    </label>
                    <label htmlFor="cash">
                        <input type="radio" name='paymentMethod' id='cash' />
                        <S.RadioPaymentBox style={{ padding: '1rem 4rem 1rem 1rem' }}>
                            <Money size={16} />
                            <span>Dinheiro</span>
                        </S.RadioPaymentBox>
                    </label>
                </S.RadiosContainer>
            </S.PaymentBox>
        </>
    )
}
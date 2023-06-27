import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from '@phosphor-icons/react';
import * as S from './styles';
import expresso from '../../assets/expresso.png';
import latte from '../../assets/latte.png';
import { Counter } from '../../components/Counter';

export function CheckouttPage() {
    return (
        <S.CheckoutContainer>
            <S.OrderContainer>
                <h3>Complete seu pedido</h3>

                <S.FormBox>
                    <div className="tittle">
                        <MapPinLine size={22} />
                        <span>Endereço de Entrega</span>
                    </div>

                    <p>Informe o endereço onde deseja receber seu pedido</p>

                    <div className="fields">
                        <S.StyledInput type='number' placeholder='CEP' name='cep' id='cep' />
                        <S.StyledInput type='text' placeholder='Rua' name='street' id='street' />
                        <S.StyledInput type='number' placeholder='Número' name='number' id='number' />
                        <S.StyledInput type='text' placeholder='Complemento' name='complement' id='complement' required={false} />
                        <S.StyledInput type='text' placeholder='Bairro' name='district' id='district' />
                        <S.StyledInput type='text' placeholder='Cidade' name='city' id='city' />
                        <S.StyledInput type='text' placeholder='UF' name='state' id='state' />
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

            </S.OrderContainer>

            <S.SelectedCoffeesContainer>
                <h3>Cafés selecionados</h3>

                <S.OrderBox>
                    <S.StyledCoffeeCard>
                        <S.Info>
                            <img src={latte} />

                            <S.Details>
                                <p>Expresso Tradicional</p>
                                <S.Action>
                                    <Counter />

                                    <S.RemoveButton>
                                        <Trash size={16} />
                                        <span>Remover</span>
                                    </S.RemoveButton>
                                </S.Action>
                            </S.Details>
                        </S.Info>
                    </S.StyledCoffeeCard>
                </S.OrderBox>
            </S.SelectedCoffeesContainer>
        </S.CheckoutContainer>
    )
}
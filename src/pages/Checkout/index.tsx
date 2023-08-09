import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from '@phosphor-icons/react';
import * as S from './styles';
import { Counter } from '../../components/Counter';
import { FormEvent, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CoffeeShopContext } from '../../contexts/CoffeeShopContext';

export function CheckouttPage() {
    const navigate = useNavigate();

    const { cartItems } = useContext(CoffeeShopContext);

    function handleSubmitOrder(event: FormEvent) {
        event.preventDefault()

        navigate('/success');
    }

    return (
        <S.CheckoutContainer onSubmit={handleSubmitOrder}>
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
                    {cartItems.map(coffee => {
                        return (
                            <>
                                <S.StyledCoffeeCard>
                                    <S.Info>
                                        <img src={coffee.img} />

                                        <S.Details>
                                            <p>{coffee.name}</p>
                                            <S.Action>
                                                <Counter key={coffee.id} coffee={coffee} />

                                                <S.RemoveButton>
                                                    <Trash size={16} />
                                                    <span>Remover</span>
                                                </S.RemoveButton>
                                            </S.Action>
                                        </S.Details>
                                    </S.Info>

                                </S.StyledCoffeeCard>
                                <S.Divider />
                            </>
                        )
                    })}

                    <S.ItensResume>
                        <S.TotalItensPrice>
                            <p>Total de itens</p>
                            <span>R$ 29,70</span>
                        </S.TotalItensPrice>
                        <S.Freight>
                            <p>Entrega</p>
                            <span>R$ 3,50</span>
                        </S.Freight>
                        <S.Total>
                            <p>Total</p>
                            <span>R$ 33,20</span>
                        </S.Total>
                    </S.ItensResume>

                    <S.ConfirmOrderButton type='submit' >
                        <span>Confirmar pedido</span>
                    </S.ConfirmOrderButton>
                </S.OrderBox>
            </S.SelectedCoffeesContainer>
        </S.CheckoutContainer>
    )
}
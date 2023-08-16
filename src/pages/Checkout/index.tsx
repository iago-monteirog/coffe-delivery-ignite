import { Trash } from '@phosphor-icons/react';
import * as S from './styles';
import { Counter } from '../../components/Counter';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartItensProps, CoffeeShopContext } from '../../contexts/CoffeeShopContext';
import * as zod from 'zod';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckoutForm } from './components/CheckoutForm';

const checkoutFormValidationSchema = zod.object({
    cep: zod.string().min(8, 'Preencha este campo com um CEP correto.'),
    street: zod.string().min(3).max(50),
    number: zod.string().min(1, 'Informe o número do endereço.'),
    complement: zod.string().optional(),
    district: zod.string().min(3, 'Informe o bairro.'),
    city: zod.string().min(3, 'Informe a cidade.'),
    state: zod.string().min(2).max(3),
    paymentMethod: zod.string()
});

type CheckoutFormData = zod.infer<typeof checkoutFormValidationSchema>

export function CheckouttPage() {
    const { cartItems, uniqueCartItems, setUniqueCartItems, setOrder, setCartItems } = useContext(CoffeeShopContext);
    const [totalItemsSumInReal, setTotalItemsSumInReal] = useState<string>('');
    const [totalSumInReal, setTotalSumInReal] = useState<string>('');

    const navigate = useNavigate();

    const checkoutForm = useForm<CheckoutFormData>({
        resolver: zodResolver(checkoutFormValidationSchema),
        defaultValues: {
            cep: '00000-000',
            street: '',
            number: '',
            complement: '',
            district: '',
            city: '',
            state: '',
            paymentMethod: ''
        }
    });

    const { handleSubmit, reset } = checkoutForm;

    useEffect(() => {
        const processedCartItems: Record<number, { item: CartItensProps; quantity: number }> = {};


        cartItems.forEach(item => {
            if (!processedCartItems[item.id]) {
                processedCartItems[item.id] = { item: item, quantity: 1 };
            } else {
                processedCartItems[item.id].quantity++;
            }
        });

        setUniqueCartItems(Object.values(processedCartItems));

    }, [cartItems, setUniqueCartItems]);

    useEffect(() => {
        const totalItemsSum = cartItems.reduce((acc, coffee) => acc + coffee.price, 0);

        setTotalItemsSumInReal(totalItemsSum.toLocaleString('pt-BR', { minimumFractionDigits: 2 }));
    }, [cartItems, setTotalItemsSumInReal]);

    useEffect(() => {
        const totalItemsSumAsNumber = parseFloat(totalItemsSumInReal);

        const totalSumWithFreight = totalItemsSumAsNumber + 3.5;

        setTotalSumInReal(totalSumWithFreight.toLocaleString('pt-BR', { minimumFractionDigits: 2 }));

    }, [totalItemsSumInReal, setTotalSumInReal]);

    function handleSubmitOrder(data: CheckoutFormData) {
        setOrder(data);

        setCartItems([]);

        reset();

        navigate('/success');
    }

    return (
        <S.CheckoutContainer onSubmit={handleSubmit(handleSubmitOrder)}>
            <S.OrderContainer>
                <h3>Complete seu pedido</h3>
                <FormProvider {...checkoutForm}>
                    <CheckoutForm />
                </FormProvider>

            </S.OrderContainer>

            <S.SelectedCoffeesContainer>
                <h3>Cafés selecionados</h3>

                <S.OrderBox>
                    {uniqueCartItems.map(coffee => {
                        return (
                            <>
                                <S.StyledCoffeeCard>
                                    <S.Info>
                                        <img src={coffee.item.img} />

                                        <S.Details>
                                            <p>{coffee.item.name}</p>
                                            <S.Action>
                                                <Counter key={coffee.item.id} coffee={coffee.item} />

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
                            <span>R$ {totalItemsSumInReal}</span>
                        </S.TotalItensPrice>
                        <S.Freight>
                            <p>Entrega</p>
                            <span>R$ 3,50</span>
                        </S.Freight>
                        <S.Total>
                            <p>Total</p>
                            <span>R$ {totalSumInReal}</span>
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
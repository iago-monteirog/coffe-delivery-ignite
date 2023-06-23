import { MapPinLine } from '@phosphor-icons/react';
import * as S from './styles';

export function CheckouttPage() {
    return (
        <S.CheckoutContainer>
            <S.OrderContainer>
                <h3>Complete seu pedido</h3>

                <S.FormBox>
                    <div className="tittle">
                        <MapPinLine size={22} weight='thin' />
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

            </S.OrderContainer>
            <S.SelectedCoffeesContainer>
                <h3>Cafés selecionados</h3>
            </S.SelectedCoffeesContainer>
        </S.CheckoutContainer>
    )
}
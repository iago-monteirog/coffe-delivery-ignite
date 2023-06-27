import { Minus, Plus } from '@phosphor-icons/react';
import * as S from './styles';

export function Counter() {
    return (
        <S.Counter>
            <Minus size={16} weight='bold' />
            <span>1</span>
            <Plus size={16} weight='bold' />
        </S.Counter>
    );
}
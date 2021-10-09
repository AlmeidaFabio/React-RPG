import { CharacterSides } from '../../types/CharacterSides';
import * as Style from './styles'

type Props = {
    x:number;
    y:number;
    side: CharacterSides;
    name: string;
}

export function Character({ x, y, side, name }:Props) {
    const size = 30;
    const sides = {
        down: 0,
        left: -30,
        right: -60,
        up: -90
    }

    return(
        <Style.Container 
        size={size}
        left={x * size}
        top={y * size}
        sidePos={sides[side] ?? 0}
        >
            <Style.NameBox>{name}</Style.NameBox>
        </Style.Container>
    )
}
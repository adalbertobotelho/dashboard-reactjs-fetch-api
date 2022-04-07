import styled from 'styled-components';
import { linearGradient } from 'polished';

export const Header = styled.header`

    const gradientTopMenu = ${linearGradient({
        colorStops: ['#AE276F', '#5F1478'],
        toDirection: 'to left',
    })};

    display: flex;
    align-items: center;
    height: 64px;
    background: gradientTopMenu;

    img {
        margin-left: 30px;
    }

`
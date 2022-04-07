import styled from 'styled-components';

import bgSearch from './assets/fundo-busca.png'

export const Container = styled.div`

    height: 261px;
    background-image: url(${bgSearch});
    justify-content: center;
    display: flex;

    .input-search {
        width: 1046px;
        height: 75px;
        margin-top: 147px;
        border-radius: 8px;
        opacity: 1;
        border: 0;
        font-size: 25px;
        font-family: 'muli', sans-serif;
        font-weight: 300;
        font-style: normal;
        padding-left: 28px;

        ::placeholder {
            
        }
    }
`
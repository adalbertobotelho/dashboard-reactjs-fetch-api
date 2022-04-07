import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #F6F4F6
    }

    .cards-wrapper {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        flex-flow: wrap;
        flex-direction: row;
        width: 90%;
        margin: 50px auto;
        
    }

    input[type=button] {
        cursor: pointer;
    }
`;
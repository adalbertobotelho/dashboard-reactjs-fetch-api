import styled from 'styled-components';

export const Container = styled.div`
    .cards-header-container {
            width: 100%;
            display: flex;
            justify-content: center;
        }

        .cards-header {
            width: 1046px;
            justify-content: space-between;
            display: flex;
            margin-top: 40px;
            margin-bottom: 40px
        }

        .title-header-button {
            border: 0;
            border-radius: 8px;
            box-shadow: 0px 3px 6px #92207242;
            height: 48px;
            width: 173px;
            font-family: muli, arial, sans-serif;
            font-weight: bold;
            font-size: 18px;
            color: #fff;            
        }

        .new-card-button {
            background: #E76316;
        }

        .clear-search-button {
            background: #ccc;
            margin-left: 10px;
            color: #263238;
        }
`

export const TitleHeader = styled.h1`
    font-family: Muli, arial, sans-serif;
    font-weight: 300;
    font-size: 32px;
    color: #5F1478;

`
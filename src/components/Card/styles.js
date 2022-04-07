import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

export const CardData = styled.div`
    border: 1px solid #E4E4E4;
    background: #fff;
    width: 234px;
    height: 267px;
    box-shadow: 0 3px 6px #E5E5E5;
    border-radius: 8px;
    opacity: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px;
    
    &:hover {
        position: relative;
        top: -4px;
    }

    hr {
        width: 170px;
        border: 1px solid #F0EFF0;
        margin: 5px auto 0 auto;
    }

    .card-image {
        width: 120px;
        height: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
        align-self: center;
        margin-top: 20px
    }

    .card-image img {
        max-width: 200px;
        height: 120px;
        border: 10px solid #fff;
        box-shadow: 0 2px 3px #ccc
    }

    .card-title {
        font-family: muli, arial, sans-serif;
        font-weight: 300;
        font-size: 12px;
        color: #263238;
        text-align: center;
        margin: 0 5px;
    }

    .card-footer {
        height: 43px;
        width: 100%;
        display: flex;
        align-content: stretch;
        box-shadow: inset 0 8px 12px -6px #E5E5E5;
        background: #fff;
        border-radius: 0 0 8px 8px;
    }

    .card-footer-button-wrapper {
        height: 100%;
        width: 50%;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .card-footer-button-wrapper span {
        align-self: center;   
    }

    .card-footer-button-wrapper span svg {
        position: relative;
        top: 2px;
        margin-right: 10px;
    }
    
    .card-button {
        border: 0;
        background: transparent;
        font-family: muli, arial, sans-serif;
        font-size: 15px;
        color: #263238;
        
    }

    .card-button-delete {
        border-radius: 0 0 0 8px;
    }

    .delete svg {
        color: #DB2525;
    }

    .card-button-edit {
        border-radius: 0 0 8px 0;
    }

    .edit svg {
        color: #E76316
    }

`
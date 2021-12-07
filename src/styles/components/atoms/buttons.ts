import styled from 'styled-components';

export const ButtonStyle = styled.button`

    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    outline: none;
    border: none;
    border-radius: 8px;

    &.primary { 
    width: 100%;
    height:  48px;
    background-color: ${(props) => props.theme.colors.primary_medium};
    display: flex;
    justify-self: center
    align-self: center;
    margin: 16px;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.white};
    }

    &.outline { 
        width: 100%;
        height:  48px;
        background-color: ${(props) => props.theme.colors.white};
        display: flex;
        justify-self: center
        align-self: center;
        margin: 16px;
        outline: none;
        border: 1px solid #B5B5B5;
        color: ${(props) => props.theme.colors.grey_dark};
        justify-content: center;
        align-items: center;
    }

    &.primary:hover {
        background-color: ${(props) => props.theme.colors.primary_dark}
    }

    &.outline:hover {
        border: 1px solid #252525;
    }

    &.primary.disabled {
        pointer-events: none;
        background-color: ${(props) => props.theme.colors.primary_lightest}
    }

    &.outline.disabled{
        pointer-events: none;
        border: 1px solid #B5B5B5;
        color: ${(props) => props.theme.colors.grey_light}
    }

`
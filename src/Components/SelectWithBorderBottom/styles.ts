import styled from "styled-components";

interface SelectProps {
    size: 'small' | 'medium' | 'large'
}

export const Container = styled.div<SelectProps>`
    height: 60px;
    width: ${props => props.size === 'small' ? (`25%`) : (props.size === 'medium'? (`50%`):(`100%`))};
    background-color: ${props => props.theme.colors["background-green-light"]};
    border-radius: 5px;
    border-bottom: solid 1px ${props => props.theme.colors["green-dark"]};
`;

export const Select = styled.select`
    width: 100%;
    height: 100%;
    padding-left: 10px;
    background-color: transparent;
    border:none;
    outline: none;
    color: ${props => props.theme.colors["text-dark"]};
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    option{
        background-color: ${props => props.theme.colors["background-green-light"]};
        color: ${props => props.theme.colors["text-dark"]};
        font-size: 1rem;
        font-weight: 500;
        outline: none;
        border: none;
    }
`;
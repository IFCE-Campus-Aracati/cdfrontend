import styled from "styled-components";

interface InputProps {
    size: 'small' | 'medium' | 'large'
}

export const Container = styled.div<InputProps>`
    height: 60px;
    width: ${props => props.size === 'small' ? (`25%`) : (props.size === 'medium'? (`50%`):(`100%`))};
    background-color: ${props => props.theme.colors["background-green-light"]};
    border-radius: 5px;
    border-bottom: solid 1px ${props => props.theme.colors["green-dark"]};
    padding: 0 1rem;
`;

export const Input = styled.input`
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    color: ${props => props.theme.colors["text-dark"]};
    outline: none;
`;
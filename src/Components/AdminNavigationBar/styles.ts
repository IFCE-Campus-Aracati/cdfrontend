import styled from "styled-components";

interface ButtonProps{
    selected: boolean
}

export const NavigationContainer = styled.div`
    width: 100%;
    height: 5.25rem;
    display: flex;
    align-items: center;
    padding: 0 10rem;
    justify-content: space-evenly;
`;

export const Button = styled.button<ButtonProps>`
    width: 8.875rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom-style: ${props => props.selected ? 'solid' : 'none'};
    border-bottom-width: 1px;
    border-bottom-color: ${props => props.theme.colors["green-dark"]};
    font-size: 1rem;
    font-weight: 600;
    color: ${props => props.selected ? props.theme.colors["green-dark"] : '#C9C9C9'};
    background-color: transparent;

    transition: 300ms;

    :hover{
        color: ${props => props.theme.colors["green-dark"]};
    }
`;

export const InputContainer = styled.div`
    height: 2.5rem;
    width: 18.75rem;
    background-color: #DEDEDE;
    padding: 0 1rem;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;
    border: none;
`;

export const Search = styled.input`
    height: 2.5rem;
    width: 18.75rem;
    background-color: #DEDEDE;
    color: #929292;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;
    border: none;
    outline: 0;
`;

export const ButtonContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;
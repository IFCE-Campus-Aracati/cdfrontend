import styled from "styled-components";

interface ButtonProps{
    buttonType: 'accept' | 'reject';
    size: 'small' | 'medium'| 'large'
}

export const Container = styled.button<ButtonProps>`
    height: ${props => props.size === 'small' ? (`3.75rem`): (props.size === 'medium' ? (`3.75rem`):(`3.75rem`))};
    width: ${props => props.size === 'small' ? (`12.5rem`): (props.size === 'medium' ? (`15.25rem`):(`25.625rem`))};
    background-color:${props => props.buttonType === 'accept' ? (props.theme.colors["green-dark"]):(props.theme.colors["background-red"])} ;
    color: ${props => props.theme.colors["text-light"]} ;
    font-size: 1.5rem;
    font-weight: 700;
    border-radius: 5px;
    
`;
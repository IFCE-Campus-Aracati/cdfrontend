import styled from "styled-components";

interface CardColorProps{
    backgroundColor: 'background-blue-light' | 'background-green-light' | 'background-red-light' | 'background-yellow-light'
    borderColor: 'background-blue' | 'background-green' | 'background-red' | 'background-yellow'
}

export const CardContainer = styled.tr<CardColorProps>`
    height: 4.375rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.theme.colors[props.backgroundColor]};
    border: solid 1px ${props => props.theme.colors[props.borderColor]};
    border-radius: 5px;
`;
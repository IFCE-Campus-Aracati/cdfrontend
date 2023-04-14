import styled from "styled-components";

interface DotProps {
    backgroundColor: 'background-blue' | 'background-green' | 'background-red' | 'background-yellow'| 'transparent';
}

interface ButtonProps{
    backgroundColor: 'background-blue-light' | 'background-green-light' | 'background-red-light' | 'background-yellow-light'| 'background-gray-light'| 'transparent'
    selected: boolean
}


export const Container = styled.div`
    height: 100vh;
    width: 100vw;
`;

export const QtyDot = styled.div<DotProps>`
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    background-color: ${props => props.theme.colors[props.backgroundColor]};
    margin-right: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.colors["text-light"]};
`;

export const Button = styled.button<ButtonProps>`
    width: 12.5rem;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    border-left: solid 1px ${props => props.theme.colors["background-gray"]};
    border-right: solid 1px ${props => props.theme.colors["background-gray"]};
    font-size: 1rem;
    font-weight: 600;
    color: ${props => props.theme.colors["text-dark"]};
    background-color: ${props => props.selected ? props.theme.colors[props.backgroundColor] : 'transparent'};
`;
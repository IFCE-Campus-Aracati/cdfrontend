import styled from "styled-components";
import  menuicon from '../../assets/MenuIcon.svg'
import  impressoraicon from '../../assets/IconImpressora.svg'

export const HeaderContainer = styled.div`
    width: 100%;
    height: 6.75rem;
    display: flex;
    justify-content: space-between;
    background-color: ${props => props.theme.colors["background-dark"]};
    align-items: center;
    padding: 0 2rem;
`;

export const IconsContainer = styled.div`
    width: auto;
    height: auto;
    display: flex;
    gap: 1rem;
`;


export const Button = styled.button`
    height: 3.75rem;
    width: 3.75rem;
    border-radius: 100%;
    background-color: ${props => props.theme.colors["background-gray"]};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    :hover{
        background-color: #444444;
        transition: 200ms;
    }
`;


export const MenuIcon = styled.div`
    width: 32px;
    height: 32px;
    background-image: url(${menuicon});
    background-size: cover;
`;

export const RedDot = styled.div`
    width: 12px;
    height: 12px;
    border-radius: 100%;
    background-color: red;
    position: absolute;
    right: 0.875rem;
    bottom: 0.875rem;
`;

export const InputContainer = styled.div`
    height: 3.125rem;
    width: 27.625rem;
    background-color: ${props => props.theme.colors["background-light"]};
    color: #929292;
    padding: 0 1rem;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 600;
    border: none;
`;

export const Search = styled.input`
    height: 3.125rem;
    width: calc(27.625rem - 32px);
    background-color: ${props => props.theme.colors["background-light"]};
    color: #929292;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 600;
    border: none;
    outline: 0;
`;

export const Logo = styled.div`
    height: 5rem;
    width: 5rem;
    background-image: url(${impressoraicon});
    background-size: cover;
`;

export const MenuTitle = styled.h1`
    color: #fff;
    font-size: 32px;
    font-weight: 700;
    margin: 0 1rem 2rem 1rem;
`;



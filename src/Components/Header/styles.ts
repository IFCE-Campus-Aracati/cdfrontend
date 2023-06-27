import styled from "styled-components";
import  impressoraicon from '../../assets/IconImpressora.svg'

interface ButtonProps{
    selected: boolean
}

export const HeaderContainer = styled.div`
    width: 100%;
    height: 5.25rem;
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
    align-items: center;
`;


export const Button = styled.button`
    height: 2.5rem;
    width: 2.5rem;
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


export const RedDot = styled.div`
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 100%;
    background-color: red;
    position: absolute;
    right: 0.5rem;
    bottom: 0.6rem;
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
    height: 3.75rem;
    width: 3.75rem;
    background-image: url(${impressoraicon});
    background-size: cover;
`;

export const MenuTitle = styled.h1`
    color: #fff;
    font-size: 32px;
    font-weight: 700;
    margin: 0 0 2rem 1rem;
`;

export const PerfilContainer = styled.button`
    display: flex;
    align-items: center;
    gap: 0.313rem;
    background-color: transparent;
`;

export const NewOrderButton = styled.button`
    width: 10.813rem;
    height: 2.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
    background-color: #FFF;
    font-size: 1rem;
    font-weight: 600;
    color: #56885E;
    border-radius: 3.125rem;

    :hover{
        background-color: #56885E;
        color: #FFF;
    }

    .Icon{
        color:"#56885E";
        :hover{
            color: #FFF;
        }
    }

    transition: 300ms;
`;

export const UserButton = styled.button`
    width: 100%;
    height: 2.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
    background-color: #FFF;
    font-size: 1rem;
    font-weight: 600;
    color: #56885E;
    border-radius: 5px;
    margin-bottom: 1rem;

    :hover{
        background-color: #56885E;
        color: #FFF;
    }

    transition: 300ms;
`;

export const MenuButtonContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
`;

export const MenuButton = styled.button<ButtonProps>`
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    border: none;
    font-size: 1rem;
    font-weight: 600;
    color: ${props => props.selected ? props.theme.colors["green-dark"] : '#fff'};
    background-color: ${props => props.selected ? '#fff' : 'transparent'};

    transition: 300ms;

    :hover{
        color: ${props => props.theme.colors["green-dark"]};
    }
    padding: 0 1rem;
`;

export const NavBarContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
`;


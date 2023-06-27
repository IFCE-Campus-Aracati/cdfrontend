import styled from 'styled-components';

export const HomeContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const HeaderContainer = styled.div`
    width: 100%;
    height: 5.25rem;
    background-color: ${props => props.theme.colors["background-dark"]};
    display: flex;
    align-items: center;
    padding: 0 1rem;
    justify-content: space-between;
`;

export const Body = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    padding: 4rem 10rem 0 10rem;
    position: relative;
`;

export const MainLeft = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 768px) {
        width: 100%;
    }
`;
export const MainRight = styled.div`
    width: 50vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 768px) {
        display: none;
    }
`;

export const Footer = styled.div`
    width: 100%;
    max-height:2.75rem;
    height: 100%;
    background-color: ${props => props.theme.colors['background-dark']};
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0 2rem;
    font-size: 1rem;
    font-weight: 500;
    color: #fff;
`;

export const TextContainer = styled.div`
    max-width: 100%;
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-size: 2.625rem;
    font-weight: bold;
    margin-bottom: 2rem;
`;

export const Text = styled.h1`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 3.25rem;
`;

export const Button = styled.button`
    max-width: 33.625rem;
    max-height: 4rem;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors['green-dark']};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    color: ${props => props.theme.colors['text-light']};
    font-size: 2rem;
    font-weight: 500;
    border-radius: 5px;
    :hover{
        background-color: ${props => props.theme.colors['hover-green-dark']};
        transition: 200ms;
    }
`;

export const LogoContainer = styled.button`
    width: auto;
    height: auto;
    color: #fff;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    background-color: transparent;
`;

export const HeaderButtonContainer = styled.div`
    width: auto;
    display: flex;
    gap: 3rem;
    @media(max-width: 768px){
        display: none;
        
    }
`;

export const UserButtonContainer = styled.div`
    width: auto;
    display: flex;
    gap: 1rem;
`;

export const HeaderButton = styled.button`
    width: 7rem;
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

    transition: 300ms;
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

export const MenuButton = styled.button`
    width: 2rem;
    height: 2rem;
    background-color: transparent;
    display: none;
    @media(max-width: 768px){
        display: flex;
        position: absolute;
        right: 2rem;
        
    }
`;

export const NavMenuContainer = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    position: absolute;
    z-index: 4;
    flex-direction: column;
    background-color: ${props => props.theme.colors["background-dark"]};
    align-items: center;
    right: 0;
    top: 0;
    
    @keyframes slideIn {
        from {
            right: -50%;
        }
        to{
            right: 0;
        }
    }
    animation-duration: 300ms;
    animation-name: slideIn;
`;
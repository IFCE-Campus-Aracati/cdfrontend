import styled from 'styled-components';

export const HomeContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const HeaderContainer = styled.div`
    width: 100%;
    height: 6.75rem;
    background-color: ${props => props.theme.colors["background-dark"]};
    display: flex;
    align-items: center;
    padding: 0 2rem;
    justify-content: space-between;
`;

export const Body = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    padding: 5.313rem 2rem;
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
    padding: 0 2rem;
    color: #fff;
    @media (max-width: 330px) {
        margin-top: 3rem;
    }
`;

export const TextContainer = styled.div`
    max-width: 33.625rem;
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h1`
    font-size: 42px;
    font-weight: 500;
    margin-bottom: 2rem;
    word-break: break-all;
`;

export const Text = styled.p`
    font-size: 24px;
    font-weight: 300;
    word-break: break-all;
    margin-bottom: 3.25rem;
`;

export const Button = styled.button`
    max-width: 33.625rem;
    height: 4.625rem;
    width: 100%;
    background-color: ${props => props.theme.colors['green-dark']};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    color: ${props => props.theme.colors['text-light']};
    font-size: 32px;
    font-weight: 500;
    border-radius: 5px;
    :hover{
        background-color: ${props => props.theme.colors['hover-green-dark']};
        transition: 200ms;
    }
`;

export const LogoContainer = styled.div`
    width: 10.625rem;
    height: 4.375;
    color: #fff;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 60px;
`;

export const HeaderButtonContainer = styled.div`
    width: auto;
    display: flex;
    @media(max-width: 768px){
        display: none;
        
    }
`;

export const HeaderButton = styled.button`
    background-color: transparent;
    border: none;
    color: ${props => props.theme.colors["text-light"]};
    font-size: 24px;
    font-weight: 400;
    margin-left: 2rem;
    :hover{
        color: ${props => props.theme.colors["hover-text-light"]};
        transition: 200ms;
    }
    @media(max-width: 768px){
        margin: 0;
        margin-top: 2rem;
        
    }
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
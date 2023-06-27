import styled from "styled-components";

interface ButtonProps{
    color: '#FC3C2A' | '#56885E'
}

export const Container = styled.div`
    width: 100%;
    height: calc(100vh - 5.25rem);
    padding: 0 10rem;
    padding-top: 3rem;
`;

export const PerfilContent = styled.div`
    width: 100%;
    height: 19.125rem;
    background-color: #E8E6E6;
    display: flex;
    align-items: center;
    padding: 0rem 3rem;
    gap: 1rem;
    position: relative;
    border-radius: 5px;
`;

export const PhotoContainer = styled.div`
    height: 12.5rem;
    width: 12.5rem;
    border-radius: 100%;
    background-color: #c9c9c9;
`;

export const TextContainer = styled.p`
    font-size: 2rem;
    font-weight: 600;
    color: ${props => props.theme.colors["text-dark"]};
`;

export const EmailContent = styled.p`
    font-size: 1rem;
    color: #929292;
    font-weight: 500;
`;

export const ButtonContainer = styled.div`
    width: auto;
    height: auto;
    display: flex;
    gap: 1rem;
`;

export const Button = styled.button`
    background-color: transparent;
    width: 1rem;
    height: 1rem;
    color: ${props => props.theme.colors["text-dark"]};
    
    :hover{
        color: #56885E;
    }
`;

export const ConfigButton = styled.button`
    background-color: transparent;
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: ${props => props.theme.colors["text-dark"]};
    
    :hover{
        color: ${props => props.theme.colors["background-red"]};
    }
`;

export const ConfigContainer = styled.div`
    width: 10rem;
    height: 8rem;
    display: flex;
    position: absolute;
    top: 2.3rem;
    right: 1.8rem;
    background-color: #fff;
    border-radius: 5px;
    padding: 2rem 1rem;

    @keyframes slideIn {
        from {
            width: 0rem;
            height: 0rem;
        }

        to{
            width: 10rem;
            height: 8rem;
        }
    }
    animation-duration: 300ms;
    animation-name: slideIn;
`;

export const DeleteButton = styled.button`
    width: 100%;
    height: 2rem;
    border-radius: 5px;
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
    background-color: ${props => props.theme.colors["background-red"]};

    :hover{
        background-color: #742018;
        transition: 300ms;
    }
`;
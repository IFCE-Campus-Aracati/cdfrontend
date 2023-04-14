import styled from "styled-components";

export const Container = styled.button`
    width: 22.063rem;
    height: 7.375rem;
    display: flex;
    background-color: ${props => props.theme.colors["background-dark"]};
    color: ${props => props.theme.colors["text-light"]};
    font-size: 1rem;
    p{

        font-weight: bold;
    }
    align-items: center;
    position: relative;
    text-align: start;
    padding: 0 1rem;
`;

export const TextContainer = styled.div`
    width: 17.188rem;
`;

export const Dot = styled.div`
    width: 12px;
    height: 12px;
    border-radius: 100%;
    background-color: ${props => props.theme.colors["background-red"]};
    position: absolute;
    right: 1rem;
    bottom: 50%;
`;

export const Time = styled.p`
    color: #0A7CFF;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    text-align: start;
    margin-top: 1rem;
`;
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: auto;
`;

export const Input = styled.label`
    width: 100%;
    height: 3rem;
    background-color: ${props => props.theme.colors["background-green-light"]};
    border-bottom: solid 1px ${props => props.theme.colors["green-dark"]};
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    font-size: 1rem;
    color: #929292;
    cursor: pointer;
`;
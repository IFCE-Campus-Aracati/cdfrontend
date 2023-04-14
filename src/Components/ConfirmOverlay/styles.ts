import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.3);
`;
export const Content = styled.div`
    width: 45rem;
    height: 25rem;
    background-color: ${props => props.theme.colors["background-light"]};
`;
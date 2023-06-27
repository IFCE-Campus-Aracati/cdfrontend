import styled from "styled-components";

export const Container = styled.div`
    height: calc(100% - 5.25rem);
    width: 18%;
    background-color: ${props => props.theme.colors["background-dark"]};
    position: absolute;
    z-index: 999;
    right: 0rem;
    top: 5.25rem;
    @keyframes slideIn {
        from {
            width: 0%;
            height: calc(100% - 5.25rem);
        }

        to{
            width: 18%;
            height: calc(100% - 5.25rem);
        }
    }

    animation-duration: 300ms;
    animation-name: slideIn;
`;
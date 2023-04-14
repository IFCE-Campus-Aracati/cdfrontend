import styled from "styled-components";

export const Container = styled.div`
    height: calc(100% - 6.75rem);
    width: 22.063rem;
    background-color: ${props => props.theme.colors["background-dark"]};
    position: absolute;
    right: 0;
    top: 6.75rem;
    @keyframes slideIn {
        from {
            width: 0rem;
        }

        to{
            width: 22.063rem;
        }
    }

    animation-duration: 300ms;
    animation-name: slideIn;
`;
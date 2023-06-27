import styled from "styled-components";

export const OrderContainer = styled.div`
    width: 100%;
    height: calc(100vh - 6.75rem - 7.5rem);
    display: flex;
    flex-direction: column;
    padding: 3rem 10rem;
`;

export const Title = styled.p`
    color: #56885E;
    font-size: 1.5rem;
    font-weight: 500;
`;

export const SearchContainer = styled.div`
    width: 100%;
    height: 20rem;
    border-radius: 5px;
    background-color: #E8E6E6;
    padding: 3rem 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SearchTitleContainer = styled.div`
    width: 100%;
    height: auto;
`;

export const SearchTitle = styled.p`
    font-size: 1rem;
    font-weight: 500;
    color: ${props => props.theme.colors["text-dark"]};
    display: flex;
    gap: 0.4rem;
    p{
        
        color: #56885E;
    }
`;

export const InputContainer = styled.div`
    width: 100%;
    height: 3.75rem;
    margin-top: 0.5rem;
    border: 1px solid #56885E;
    border-radius: 5px;
    display: flex;
`;

export const Input = styled.input`
    width: 100%;
    height: 100%;
    padding: 0 1rem;
    outline: none;
    border: none;
    border-radius: 5px 0 0 5px;
`;

export const SearchButton = styled.button`
    height: 100%;
    width: 4.375rem;
    background-color: #56885E;
    border-radius: 0 5px 5px 0;
    :hover{
        background-color: #26412A;
        transition: 300ms;
    }

    .icon{
        color: #fff;
    }
`;

export const Button = styled.button`
    height: 3.125rem;
    width: 15rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: #56885E;
    font-size: 1.5rem;
    font-weight: 600;
    color: #fff;
    margin-top: 3rem;
    :hover{
        background-color: #26412A;
        transition: 300ms;
    }
`;
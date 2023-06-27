import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const LoginContrainer = styled.div `
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center; 
  justify-content: center; 
  padding: 15px;
  background-color: ${props => props.theme.colors["background-dark"]};
`;

export const LoginWrap = styled.div`
  width: 34.375rem;
  height: 34.375rem;
  background-color: ${props=>props.theme.colors["background-light"]};
  border-radius: 5px;
  overflow: hidden;
  padding: 70px 55px 33px 55px;
  box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.2) ;
  display: flex; 
  position: relative;
  flex-direction: column;
`;

export const LoginForm = styled.form`
  width: 100%;
`;

export const Title = styled.span`
  display: flex;
  font-size: 2rem;
  color:  ${props=>props.theme.colors["text-dark"]};
  text-align: left;
  font-weight: bold;
  margin-bottom: 2rem;
`;

export const RecoveryPass = styled.button`
    margin-top: 2rem;
    display: flex;
    align-self: flex-end;
    width: auto;
    height: 1rem;
    cursor: pointer;
    background-color: transparent;

    margin-bottom: 0.3rem;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;

export const CreateAccount = styled.button`
    margin-top: 1rem;
    background: none;
    color: ${props => props.theme.colors["text-dark"]};
    font-weight: 600;
    font-size: 1rem;

    span{
        font-size: 1rem;
        color: ${props => props.theme.colors["green-dark"]};

        :hover{
            color: ${props => props.theme.colors["hover-green-dark"]};
        }
    }
`;
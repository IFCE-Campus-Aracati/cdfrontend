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
  height: 36.375rem;
  background-color: ${props=>props.theme.colors["background-light"]};
  border-radius: 5px;
  overflow: hidden;
  padding: 70px 55px 33px 55px;
  box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.2) ;
  display: flex;
  flex-wrap: wrap; 
  justify-content: center; 
  align-items: center;  
`;

export const TextTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: left;
  top: 415px;
`; 

export const LoginTitle = styled.span`
  display: block;
  font-size: 30px;
  color:  ${props=>props.theme.colors["text-dark"]};
  line-height: 1.2;
  text-align: left;
  justify-content: left;
  align-items: left;
  margin-bottom: 20px;
  font-weight: bold;
  
`;

export const Input = styled.input`
  font-size: 15px;
  color: ${props=>props.theme.colors["text-dark"]};
  border: none;
  display: block;
  width: 100%;
  height: 60px;
  background-color: ${props=>props.theme.colors["green-light"]};
  margin-bottom: 15px;
  border-radius: 5px;
  border-bottom:1px solid ${props => props.theme.colors["green-dark"]};
  padding-left: 10px; 
  outline: none
`;

export const ButtonDrpDwon = styled.select`
  font-size: 15px;
  color: ${props=>props.theme.colors["text-dark"]};
  /* margin-bottom: 15px; */
  border: none;
  display: block;
  width: 100%;
  height: 60px;
  background-color: ${props=>props.theme.colors["green-light"]};
  margin-bottom: 10px;
  border-radius: 5px;
  border-bottom:1px solid ${props => props.theme.colors["green-dark"]};
  padding-left: 10px;
  outline: none;
  cursor: pointer;
`;

export const ContainerLoginButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 13px;
`;

export const LoginButton = styled.button`
  background-color: ${props=>props.theme.colors["green-dark"]};
  color: ${props=>props.theme.colors["text-light"]};
  width: 250px;
  height: 60px;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  :hover{
        background-color: ${props => props.theme.colors['hover-green-dark']};
        transition: 200ms;
    }
`;
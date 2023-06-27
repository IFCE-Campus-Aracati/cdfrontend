import styled, { createGlobalStyle } from "styled-components";
import { ToastContainer } from 'react-toastify';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const LoginContrainer = styled.div `
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center; 
  justify-content: center; 
  background-color: ${props => props.theme.colors["background-dark"]};
`;

export const LoginWrap = styled.div`
  max-width: 34.375rem;
  max-height: 37.375rem;
  height: 100%;
  width: 100%;
  background-color: ${props=>props.theme.colors["background-light"]};
  border-radius: 5px;
  overflow: hidden;
  padding: 2rem 55px 1rem 55px;
  box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.2) ;
  display: grid; 
  position: relative;
  flex-direction: column;
`;

export const Title = styled.span`
  display: flex;
  font-size: 2rem;
  color:  ${props=>props.theme.colors["text-dark"]};
  text-align: left;
  font-weight: bold;
`;


export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Toast = styled(ToastContainer)`
  position: absolute;
`;


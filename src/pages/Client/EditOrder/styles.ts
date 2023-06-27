import styled from "styled-components";

export const Contrainer = styled.div `
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 3rem  10rem;
`;

export const TextLeft = styled.div`
  display: flex;
  justify-content: left;
  align-items: left;
  margin-top: 5px;
`;

export const TextSolitacao = styled.span`
    color: ${props=>props.theme.colors["text-dark"]};
    font-size: 45px;
    text-align: left;
    font-weight: bold;
    margin-bottom: 20px;
    
`;

export const InputCalendarWrapper = styled.div`
  width: 100%;
  gap: 1rem;
  display: flex; 
  flex-direction: row;
`;

export const Calendario = styled.button`
  font-size: 15px;
  color: ${props=>props.theme.colors["text-dark"]};
  margin-bottom: 20px;
  border: none;
  display: block;
  width: 45%;
  height: 60px;
  background-color: ${props=>props.theme.colors["green-light"]};
  border-radius: 5px;
  border-bottom:1px solid ${props => props.theme.colors["green-dark"]};
  padding-left: 10px;
  outline: none;
  cursor: pointer
`;

export const DropDwonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;


export const GapContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;

export const ButtonRight = styled.div`
  display: flex;
  justify-content: right;
  align-items: right;
  margin-top: 5px;
  gap: 1rem;
`;
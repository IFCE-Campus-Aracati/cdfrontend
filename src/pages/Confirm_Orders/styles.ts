import styled from "styled-components";

export const Contrainer = styled.div `
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export const LoginWrap = styled.div`
  width: 70.625rem;
  background-color: ${props=>props.theme.colors["background-light"]};
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  align-items: center;  
`;

export const GapContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const ButtonRight = styled.div`
  display: flex;
  justify-content: right;
  align-items: right;
  margin-top: 5px;
  gap: 1rem;
`;

export const DropDwonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const InputCalendarWrapper = styled.div`
  width: 100%;
  gap: 0.5rem;
  display: flex; 
  flex-direction: row;
`;

export const TextLeft = styled.div`
  display: flex;
  justify-content: left;
  align-items: left;
  /* margin-top: 5px; */
`;

export const TextReference = styled.span`
    color: ${props=>props.theme.colors["text-dark"]};
    font-size: 18px;
    text-align: left;
    font-weight: bold;
    /* margin-bottom: 10px; */
`;

export const TextReferenceWrapper = styled.div`
  width: 100%;
  gap: 31rem;
  display: flex; 
  flex-direction: row;
`;

export const TextConfirm_Orders = styled.span`
    color: ${props=>props.theme.colors["text-dark"]};
    font-size: 45px;
    text-align: left;
    font-weight: bold;
    margin-bottom: 20px;  
`;

export const TurnoUrgenciaCorWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  /* align-items: center; */
  gap: 24rem;
`;
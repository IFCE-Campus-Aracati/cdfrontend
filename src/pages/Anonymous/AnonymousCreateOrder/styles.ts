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

export const OverlayTitle = styled.p`
    font-size: 2rem;
    font-weight: 600;
    color: ${props => props.theme.colors["text-dark"]};
`;

export const  OverlayText = styled.p`
    font-size: 1.3rem;
    font-weight: 500;
    color: ${props => props.theme.colors["text-dark"]};
`;

export const OverlayButtonContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
    gap: 1rem;
`;

export const OverlayContainer = styled.div`
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
export const OverlayContent = styled.div`
    width: 70%;
    height: 50%;
    background-color: ${props => props.theme.colors["background-light"]};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem 5rem;
    border-radius: 5px;
    gap: 3rem;
`;
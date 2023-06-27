import styled from "styled-components";

interface StateProps {
    type: 'aprovado' | 'reprovado' | 'pendente' | 'produzindo'
}

export const Table = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
`;

export const Thead = styled.thead`
    background-color: #fff;
    height: 4.375rem;
`;
export const TableBody = styled.tbody`
  
`;

export const Td = styled.td`
    padding: 8px;
    color: #646377;
    font-size: 1rem;
    font-weight: 600;
`;

export const Tr = styled.tr`
    height: 4.375rem;
    border-radius: 8px;
    :nth-child(odd) {
        background-color: #E8E6E6; /* Cor cinza para linhas ímpares */
    }
    :nth-child(even) {
        background-color: #F8F6F6; /* Cor branca para linhas pares */
    }
`;

export const Th = styled.th`
    padding: 8px;
    text-align: left;
    position: relative;
`;

export const IconButton = styled.button`
    height: 2rem;
    width: 2rem;
    background-color: transparent;

    .editIcon{
        font-size: 1.3rem;
        color: ${props => props.theme.colors["background-dark"]};
        :hover{
            color: ${props => props.theme.colors["green-dark"]};
        }
    }

    .deleteIcon{
        font-size: 1.3rem;
        color: ${props => props.theme.colors["background-dark"]};
        :hover{
            color: ${props => props.theme.colors["background-red"]};
        }
    }

    .downloadIcon{
        font-size: 1.3rem;
        color: ${props => props.theme.colors["background-dark"]};
        :hover{
            color: ${props => props.theme.colors["background-blue"]};
        }
    }

`;

export const ButtonContainer = styled.div`
    width: 5rem;
    display: flex;
    gap: 1rem;
`;

export const InfoContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const State = styled.div<StateProps>`
    height: 1.5rem;
    width: 9rem;
    background-color: ${props => props.type === 'aprovado' ? (props.theme.colors["background-green-light"]) : (props.type === 'reprovado' ? (props.theme.colors["background-red-light"]) : (props.type === 'produzindo' ? (props.theme.colors["background-blue-light"]) : (props.theme.colors["background-yellow-light"])))};
    border: solid 1px ${props => props.type === 'aprovado' ? (props.theme.colors["background-green"]) : (props.type === 'reprovado' ? (props.theme.colors["background-red"]) : (props.type === 'produzindo' ? (props.theme.colors["background-blue"]) : (props.theme.colors["background-yellow"])))};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-weight: 600;
    padding: 0 1rem;
    border-radius: 5px;
    color:${props => props.type === 'aprovado' ? (props.theme.colors["background-green"]) : (props.type === 'reprovado' ? (props.theme.colors["background-red"]) : (props.type === 'produzindo' ? (props.theme.colors["background-blue"]) : (props.theme.colors["background-yellow"])))};
    `;

export const OverlayTitle = styled.p`
    font-size: 2rem;
    font-weight: 600;
    color: ${props => props.theme.colors["text-dark"]};
`;

export const OverlayText = styled.p`
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

export const InputContainer = styled.div`
    height: 1.5rem;
    width: auto;
    background-color: #DEDEDE;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: none;
    position: absolute;
    padding: 0 1rem;
    right: 0;
    top: 25%;
    .option{
        height: 100%;
        width: 100%;
        background-color: #DEDEDE;
    }
`;

export const Search = styled.select`
    height: 100%;
    width: 100%;
    background-color: transparent;
    color: #929292;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;
    border-radius: 5px;
    cursor: pointer;
    outline: none;
    border: none;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
`;

export const EditOrderOverlayContainer = styled.div`
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

export const EditOrderOverlayContent = styled.div`
    width: 50%;
    height: 70%;
    background-color: ${props => props.theme.colors["background-light"]};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem 5rem;
    border-radius: 5px;
    gap: 3rem;
`;

export const TextLeft = styled.div`
  display: flex;
  justify-content: left;
  align-items: left;
  margin-top: 5px;
`;

export const TextSolitacao = styled.span`
    color: ${props => props.theme.colors["text-dark"]};
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
  color: ${props => props.theme.colors["text-dark"]};
  margin-bottom: 20px;
  border: none;
  display: block;
  width: 45%;
  height: 60px;
  background-color: ${props => props.theme.colors["green-light"]};
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



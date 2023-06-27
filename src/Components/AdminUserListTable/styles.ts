import styled from "styled-components";

interface StateProps {
    type?: string
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
    background-color: ${props => props.type === 'aprovado' ? (props.theme.colors["background-green-light"]):(props.type === 'reprovado' ? (props.theme.colors["background-red-light"]):(props.theme.colors["background-yellow-light"]))};
    border: solid 1px ${props => props.type === 'aprovado' ? (props.theme.colors["background-green"]):(props.type === 'reprovado' ? (props.theme.colors["background-red"]):(props.theme.colors["background-yellow"]))};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-weight: 600;
    padding: 0 1rem;
    border-radius: 5px;
    color:${props => props.type === 'aprovado' ? (props.theme.colors["background-green"]):(props.type === 'reprovado' ? (props.theme.colors["background-red"]):(props.theme.colors["background-yellow"]))};
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

export const EditUserContainer = styled.div`
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

export const EditUserContent = styled.div`
    width: 45rem;
    height: 25rem;
    background-color: ${props => props.theme.colors["background-light"]};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem 5rem;
    border-radius: 5px;
    gap: 1rem;
    position: relative;
`;

export const Close = styled.button`
    height: 1rem;
    width: 1rem;
    display: flex;
    position: absolute;
    right: 1rem;
    top: 1rem;
    color: ${props => props.theme.colors["text-dark"]};
    background-color: transparent;
`;
import styled from "styled-components";
interface CardColorProps{
    backgroundColor: 'background-blue-light' | 'background-green-light' | 'background-red-light' | 'background-yellow-light'
    borderColor: 'background-blue' | 'background-green' | 'background-red' | 'background-yellow'
}

export const Table = styled.table`
    width: 50%;
    border-collapse: separate;
    border-spacing: 0;
`;

export const Thead = styled.thead`
    background-color: #f2f2f2;
`;
export const TableBody = styled.tbody`
  background-color: #ff42;
  border: 1px solid #000;
  border-radius: 5px;
`;

export const Td = styled.td`
    padding: 8px;
`;

export const Tr = styled.tr<CardColorProps>`
    &:nth-child(even) {
    background-color: ${props => props.theme.colors[props.backgroundColor]};
    border:1px solid ${props => props.theme.colors[props.borderColor]};
  }
`;

export const Th = styled.th`
    padding: 8px;
    text-align: left;
`;



import { Tr, Table, Th, Td, TableBody } from "./styles";

interface CardProps {
    backgroundColor: 'background-blue-light' | 'background-green-light' | 'background-red-light' | 'background-yellow-light'
    borderColor: 'background-blue' | 'background-green' | 'background-red' | 'background-yellow'

}

export function UserTable({ backgroundColor, borderColor, ...rest }: CardProps) {
    return (

        <Table border={1} >
            <thead>
                <Th>id</Th>
                <Th>Objeto</Th>
                <Th>Impressora</Th>
                <Th>Data de impressão</Th>
                <Th>Inicio</Th>
                <Th>Término</Th>
            </thead>
            <TableBody>
                <Tr backgroundColor="background-green-light" borderColor="background-green" >
                    <Td>123123124</Td>
                    <Td>Chaveiro</Td>
                    <Td>Lema 03</Td>
                    <Td>Data de impressão</Td>
                    <Td>Inicio</Td>
                    <Td>Término</Td>
                </Tr>
            </TableBody>
        </Table>
    )
}
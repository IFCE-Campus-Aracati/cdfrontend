import { Download, Pen, Trash } from "phosphor-react";
import { useAuth } from "../../../context/useAuth"
import { ButtonContainer, Container, InfoContainer, State, Table, TableBody, Td, Th, Thead, Tr, IconButton } from "./styles";

export function AnonymousOrder() {
    const { anonymousOrder, deleteAnonymousOrderByCode, setAnonymousOrders } = useAuth();

    const deleteAnonymousOrder = async () => {
        if (anonymousOrder?.codigo) {
            await deleteAnonymousOrderByCode(anonymousOrder.codigo);
        }
    }

    const editAnonymousOrder = async () => {
        if (anonymousOrder?.codigo) {
            await setAnonymousOrders(anonymousOrder);
        }
    }

    return (
        <Container>
            <Table border={1} >
                <Thead>
                    <Th>id</Th>
                    <Th>Objeto</Th>
                    <Th>Impressora</Th>
                    <Th>Material</Th>
                </Thead>
                <TableBody>
                    <>
                        <Tr>
                            <Td>{anonymousOrder?.id_pedidoAnonimo}</Td>
                            <Td>{anonymousOrder?.descricao}</Td>
                            <Td>{anonymousOrder?.maquina}</Td>
                            <Td>{anonymousOrder?.material}</Td>
                            <Td>
                                <InfoContainer>
                                    <State type={anonymousOrder?.estado}>{anonymousOrder?.estado.toUpperCase()}</State>
                                    <ButtonContainer>
                                        <IconButton onClick={editAnonymousOrder} ><Pen className="editIcon" /></IconButton>
                                        <IconButton onClick={deleteAnonymousOrder} ><Trash className="deleteIcon" /></IconButton>
                                    </ButtonContainer>
                                </InfoContainer>
                            </Td>
                        </Tr>
                    </>
                </TableBody>
            </Table>
        </Container>
    )
}
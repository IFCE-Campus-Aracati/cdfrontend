import { useEffect, useState, useCallback, useLayoutEffect } from "react";
import { useAuth } from "../../context/useAuth";
import { Tr, Table, Th, Td, TableBody, Thead, IconButton, State, InfoContainer, ButtonContainer, OverlayTitle, OverlayText, OverlayButtonContainer } from "./styles";
import { Pen, Trash } from "phosphor-react";
import { ConfirmOverlay } from "../ConfirmOverlay";
import { Button } from '../../Components/Button';
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useLocation } from 'react-router-dom';

interface TableProps {
    id_pedido: number
    maquina: string
    material: string
    prioridade: string
    estado: string
    descricao: string
    cor: string
    comentario: string
    arquivo: string
}

interface Dataprops {
    dataOrder: TableProps[]
}

export function UserTable({ dataOrder }: Dataprops) {

    const { deleteOrderById, setUserOrder } = useAuth();
    const [openOverlay, setOpenOverlay] = useState(false);
    const [idDelete, setIdDelete] = useState(0);
    const [filteredData, setFilteredData] = useState<TableProps[]>([])
    const navigate = useNavigate();
    const location = useLocation();
    const deleteOrder = (id_pedido: number) => {
        setOpenOverlay(true);
        setIdDelete(id_pedido);
    }
   

    const confirmDeleteOrder = async (id_pedido: number) => {
        try {
            await deleteOrderById(id_pedido).then(() => {
                setFilteredData(prevData => prevData.filter(item => item.id_pedido !== id_pedido));
                const indexToRemove = dataOrder.findIndex(obj => obj.id_pedido === id_pedido);

                if (indexToRemove !== -1) {
                    dataOrder.splice(indexToRemove, 1);
                }
                toast.success(`Pedido deletado com sucesso`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                navigate(`${location.pathname}`)
            });

        } catch (error) {
            toast.error(`Não foi possivel deletar pedido`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } finally {
            setIdDelete(0);
            setOpenOverlay(false);
        }

    }

    const updateOrder = async (data: TableProps) => {
        await setUserOrder(data).then(() => {
            navigate(`/user/editorder`);
        });

    }

    const tableType = (data: TableProps) => {
        switch (data.estado) {
            case 'aprovado':
                return (
                    <Tr key={data.id_pedido} >
                        <Td>{data.id_pedido}</Td>
                        <Td>{data.descricao}</Td>
                        <Td>{data.maquina}</Td>
                        <Td>{data.material}</Td>
                        <Td>{data.prioridade}</Td>
                        <Td>
                            <InfoContainer>
                                <State type="aprovado">APROVADO</State>
                                <ButtonContainer>
                                    <IconButton onClick={() => deleteOrder(data.id_pedido)} ><Trash className="deleteIcon" /></IconButton>
                                </ButtonContainer>
                            </InfoContainer>
                        </Td>
                    </Tr>
                );
            case 'pendente':
                return (
                    <Tr key={data.id_pedido} >
                        <Td>{data.id_pedido}</Td>
                        <Td>{data.descricao}</Td>
                        <Td>{data.maquina}</Td>
                        <Td>{data.material}</Td>
                        <Td>{data.prioridade}</Td>
                        <Td>
                            {
                                <InfoContainer>
                                    <State type="pendente">EM ANÁLISE</State>
                                    <ButtonContainer>
                                        <IconButton onClick={() => updateOrder(data)} ><Pen className="editIcon" /></IconButton>
                                        <IconButton onClick={() => deleteOrder(data.id_pedido)} ><Trash className="deleteIcon" /></IconButton>
                                    </ButtonContainer>
                                </InfoContainer>
                            }
                        </Td>
                    </Tr>
                );
            case 'concluido':
                return (
                    <Tr key={data.id_pedido} >
                        <Td>{data.id_pedido}</Td>
                        <Td>{data.descricao}</Td>
                        <Td>{data.maquina}</Td>
                        <Td>{data.material}</Td>
                        <Td>{data.prioridade}</Td>
                        <Td>
                        <InfoContainer>
                                <State type="aprovado">CONCLUIDO</State>
                                <ButtonContainer></ButtonContainer>
                            </InfoContainer>
                        </Td>
                    </Tr>
                );
            case 'reprovado':
                return (
                    <Tr key={data.id_pedido} >
                        <Td>{data.id_pedido}</Td>
                        <Td>{data.descricao}</Td>
                        <Td>{data.maquina}</Td>
                        <Td>{data.material}</Td>
                        <Td>{data.prioridade}</Td>
                        <Td>
                            <InfoContainer>
                                <State type="reprovado">REPROVADO</State>
                                <ButtonContainer></ButtonContainer>
                            </InfoContainer>
                        </Td>
                    </Tr>
                );
            case 'produzindo':
                return (
                    <Tr key={data.id_pedido} >
                        <Td>{data.id_pedido}</Td>
                        <Td>{data.descricao}</Td>
                        <Td>{data.maquina}</Td>
                        <Td>{data.material}</Td>
                        <Td>{data.prioridade}</Td>
                        <Td>
                            <InfoContainer>
                                <State type="produzindo">PRODUZINDO</State>
                                <ButtonContainer></ButtonContainer>
                            </InfoContainer>
                        </Td>
                    </Tr>
                );
        }
    };


    return (

        <Table border={1} >
            <ToastContainer style={{ textAlign: 'left' }} />
            <Thead>
                <Th>id</Th>
                <Th>Objeto</Th>
                <Th>Impressora</Th>
                <Th>Material</Th>
                <Th>Prioridade</Th>
            </Thead>
            <TableBody>
                <>
                    {dataOrder.map((data) => (
                        tableType(data)
                    ))}
                </>

            </TableBody>
            {
                openOverlay &&
                <ConfirmOverlay>
                    <OverlayTitle>Tem certeza que deseja cancelar?</OverlayTitle>
                    <OverlayText>Ao <b>confirmar</b>, sua ordem de impressão será <b>excluída</b>.</OverlayText>
                    <OverlayButtonContainer>
                        <Button size="small" buttonType="accept" title="Confirmar" onClick={() => confirmDeleteOrder(idDelete)}></Button>
                        <Button size="small" buttonType="reject" title="Cancelar" onClick={() => setOpenOverlay(!openOverlay)} ></Button>
                    </OverlayButtonContainer>
                </ConfirmOverlay>

            }
        </Table>
    )
}
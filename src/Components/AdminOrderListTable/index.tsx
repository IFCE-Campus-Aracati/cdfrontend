import { useEffect, useState, useCallback, ChangeEvent, useLayoutEffect } from "react";
import { useAuth } from "../../context/useAuth";
import {
    Tr,
    Table,
    Th,
    Td,
    TableBody,
    Thead,
    IconButton,
    State,
    InfoContainer,
    ButtonContainer,
    OverlayTitle,
    OverlayText,
    OverlayButtonContainer,
    InputContainer,
    Search,
    EditOrderOverlayContainer,
    EditOrderOverlayContent,
    InputCalendarWrapper,
    DropDwonWrapper,
    ButtonRight
} from "./styles";
import { CaretDown, Download, MagnifyingGlass, Pen, Trash } from "phosphor-react";
import { ConfirmOverlay } from "../ConfirmOverlay";
import { Button } from '../Button';
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useLocation } from 'react-router-dom';
import { InputWithBorderBottom } from "../InputWithBorderBottom";
import { SelectWithBorderBottom } from "../SelectWithBorderBottom";
import { InputArchive } from "../InputArchive";

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
    data: TableProps[]
}

export function AdminOrderListTable({ data }: Dataprops) {
    const [openOverlay, setOpenOverlay] = useState(false);
    const [openOverlayDelete, setOpenOverlayDelete] = useState(false);
    const [state, setState] = useState('');
    const [openSelect, setOpenSelect] = useState(false);
    const [filteredData, setFilteredData] = useState<TableProps[]>([])
    const { adminEditOrder, adminDeleteOrder, downloadArchive } = useAuth();
    const [order, setOrder] = useState<TableProps | null>(null);
    const [type, setType] = useState(order?.maquina);
    const [material, setMaterial] = useState(order?.material);
    const [necessidade, setNecessidade] = useState(order?.prioridade);
    const [color, setColor] = useState(order?.cor);
    const [comment, setComment] = useState(order?.comentario);
    const [description, setDescription] = useState(order?.descricao);
    const [newEstado, setNewEstado] = useState(order?.estado);
    const [idDelete, setIdDelete] = useState(0);

    const opstions = [
        { key: ``, value: ``, label: 'Selecione uma opção', disabled: true },
        { key: '1', value: 'produzindo', label: 'Produzindo' },
        { key: '2', value: 'pendente', label: 'Pendente' },
        { key: '3', value: 'aprovado', label: 'Aprovado' },
        { key: '4', value: 'reprovado', label: 'Reprovado' },
        { key: '5', value: 'all', label: 'Todos os pedidos' },

    ]

    const Tipo_de_Maquina = [
        { key: `${order?.id_pedido}`, value: `${order?.maquina}`, label: `${order?.maquina}`, disabled: true, selected: true },
        { key: '1', value: 'Impressora de Resina', label: 'Impressora de Resina' },
        { key: '2', value: 'Impressora de PLA', label: 'Impressora de PLA' },
        { key: '3', value: 'Impressora de ABS', label: 'Impressora de ABS' },
        { key: '4', value: 'Maquina de Corte', label: 'Maquina de Corte' },
        { key: '5', value: 'Scanner 3D', label: 'Scanner 3D' }
    ]

    const Material = [
        { key: `${order?.id_pedido}`, value: `${order?.material}`, label: `${order?.material}`, disabled: true, selected: true },
        { key: '1', value: 'Resina', label: 'Resina' },
        { key: '2', value: 'PLA', label: 'PLA' },
    ]

    const Necessidade = [
        { key: `${order?.id_pedido}`, value: `${order?.prioridade}`, label: `${order?.prioridade}`, disabled: true, selected: true },
        { key: '1', value: 'Alta', label: 'Alta' },
        { key: '2', value: 'Média', label: 'Média' },
        { key: '3', value: 'Baixa', label: 'Baixa' }
    ]
    const Cor_para_Impressao = [
        { key: `${order?.id_pedido}`, value: `${order?.cor}`, label: `${order?.cor}`, disabled: true, selected: true },
        { key: '1', value: 'Preto', label: 'Preto' },
        { key: '2', value: 'Vermelho', label: 'Vermelho' },
        { key: '3', value: 'Amarelo', label: 'Amarelo' },
        { key: '4', value: 'Azul', label: 'Azul' }
    ]

    const estado = [
        { key: `${order?.id_pedido}`, value: `${order?.estado}`, label: `${order?.estado}`, disabled: true, selected: true },
        { key: '1', value: 'aprovado', label: 'Aprovado' },
        { key: '2', value: 'pendente', label: 'Pendente' },
        { key: '3', value: 'reprovado', label: 'Reprovado' },
        { key: '4', value: 'produzindo', label: 'Produzindo' },
        { key: '5', value: 'concluido', label: 'Concluido' }
    ]

    useLayoutEffect(() => {
        const filterByState = () => {
            if(state == ''){
                setFilteredData(data);
            }
            
        }
        filterByState();
    })

    useEffect(() => {
        const filterByState = () => {
            if (state === 'all') {
                console.log(data)
                setFilteredData(data);
            } else {
                const newData = data.filter((data) => data.estado === state);
                setFilteredData(newData);
            }
        }
        filterByState();
    }, [state])


    const editOrder = async (data: TableProps) => {
        setOrder(data)
        if (order) {
            setOpenOverlay(true);
        }

    }

    const handleUpdate = async () => {
        console.log(order?.id_pedido, material, necessidade, type, newEstado)
        if (order?.id_pedido && material && necessidade && type && newEstado) {
            await adminEditOrder(order.id_pedido, material, type, newEstado, 1, color).then(() => {
                setOpenOverlay(false);
            })
        }
    }

    const deleteOrder = (id_pedido: number) => {
        setOpenOverlayDelete(true);
        setIdDelete(id_pedido);
    }

    const confirmDeleteOrder = async (id_pedido: number) => {
        try {
            await adminDeleteOrder(id_pedido).then(() => {
                setFilteredData(prevData => prevData.filter(item => item.id_pedido !== id_pedido));
                const indexToRemove = data.findIndex(obj => obj.id_pedido === id_pedido);

                if (indexToRemove !== -1) {
                    data.splice(indexToRemove, 1);
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
            setOpenOverlayDelete(false);
        }

    }

    const handleArchive = async(filename: string) => {
        try {
            const downloadUrl = `http://localhost:3003/files/${filename}`; // Função que busca o URL de download do arquivo no backend
        
            const response = await fetch(downloadUrl);
            const blob = await response.blob();
        
            // Criação de um link temporário para realizar o download
            const downloadLink = document.createElement('a');
            downloadLink.href = URL.createObjectURL(blob);
            downloadLink.download = filename;
            downloadLink.click();
        
            // Liberação da URL do objeto blob após o download
            URL.revokeObjectURL(downloadLink.href)
          } catch (error) {
            console.error('Erro ao obter URL de download:', error);
          }
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
                                    <ButtonContainer>
                                        <IconButton onClick={() => editOrder(data)} ><Pen className="editIcon" /></IconButton>
                                        <IconButton onClick={() => deleteOrder(data.id_pedido)} ><Trash className="deleteIcon" /></IconButton>
                                        <IconButton onClick={() => handleArchive(data.arquivo)} ><Download className="downloadIcon" /></IconButton>
                                    </ButtonContainer>
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
                                        <IconButton onClick={() => editOrder(data)} ><Pen className="editIcon" /></IconButton>
                                        <IconButton onClick={() => deleteOrder(data.id_pedido)} ><Trash className="deleteIcon" /></IconButton>
                                        <IconButton onClick={() => handleArchive(data.arquivo)} ><Download className="downloadIcon" /></IconButton>
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
                                <ButtonContainer>
                                    <IconButton onClick={() => editOrder(data)} ><Pen className="editIcon" /></IconButton>
                                    <IconButton onClick={() => deleteOrder(data.id_pedido)} ><Trash className="deleteIcon" /></IconButton>
                                    <IconButton onClick={() => handleArchive(data.arquivo)} ><Download className="downloadIcon" /></IconButton>
                                </ButtonContainer>
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
                                <ButtonContainer>
                                    <IconButton onClick={() => editOrder(data)} ><Pen className="editIcon" /></IconButton>
                                    <IconButton onClick={() => deleteOrder(data.id_pedido)} ><Trash className="deleteIcon" /></IconButton>
                                    <IconButton onClick={() => handleArchive(data.arquivo)} ><Download className="downloadIcon" /></IconButton>
                                </ButtonContainer>
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
                                <ButtonContainer>
                                    <IconButton onClick={() => editOrder(data)} ><Pen className="editIcon" /></IconButton>
                                    <IconButton onClick={() => deleteOrder(data.id_pedido)} ><Trash className="deleteIcon" /></IconButton>
                                    <IconButton onClick={() => handleArchive(data.arquivo)} ><Download className="downloadIcon" /></IconButton>
                                </ButtonContainer>
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
                <Th>ID</Th>
                <Th>Objeto</Th>
                <Th>Impressora</Th>
                <Th>Material</Th>
                <Th>Prioridade</Th>
                <Th>
                    <InputContainer>
                        <Search onChange={(e) => setState(e.target.value)} onClick={() => setOpenSelect(!openSelect)} >
                            {opstions.map((value) => (
                                <option
                                    key={value.key}
                                    value={value.value}
                                    disabled={value.disabled}
                                    className="option"
                                >
                                    {value.label}
                                </option>
                            ))}
                            </Search>
                            {openSelect ? (<CaretDown size={16} color="#000" weight="bold" style={{ rotate: '180deg', transition: '100ms' }} className="icon" />) : (<CaretDown size={16} color="#000" weight="bold" style={{ transition: '100ms' }} className="icon" />)}
                    </InputContainer>
                </Th>
            </Thead>
            <TableBody>
                <>
                    {filteredData.map((data) => (
                        tableType(data)
                    ))}
                </>

            </TableBody>
            {
                openOverlayDelete &&
                <ConfirmOverlay>
                    <OverlayTitle>Tem certeza que deseja cancelar?</OverlayTitle>
                    <OverlayText>Ao <b>confirmar</b>, sua ordem de impressão será <b>excluída</b>.</OverlayText>
                    <OverlayButtonContainer>
                        <Button size="small" buttonType="accept" title="Confirmar" onClick={() => confirmDeleteOrder(idDelete)} ></Button>
                        <Button size="small" buttonType="reject" title="Cancelar" onClick={() => setOpenOverlayDelete(!openOverlayDelete)} ></Button>
                    </OverlayButtonContainer>
                </ConfirmOverlay>

            }
            {
                openOverlay &&
                <EditOrderOverlayContainer>
                    <EditOrderOverlayContent>
                        <InputCalendarWrapper>
                            <SelectWithBorderBottom data={Tipo_de_Maquina} size="large" onChange={(e) => setType(e.target.value)} />
                        </InputCalendarWrapper>
                        {(type === '2' || type === 'Impressora de Resina' || type === 'Impressora de PLA' || type === 'Impressora de ABS') && (
                            <DropDwonWrapper>
                                <SelectWithBorderBottom data={Material} size="small" onChange={(e) => setMaterial(e.target.value)} />
                                <SelectWithBorderBottom data={Necessidade} size="small" onChange={(e) => setNecessidade(e.target.value)} />
                                <SelectWithBorderBottom data={Cor_para_Impressao} size="small" onChange={(e) => setColor(e.target.value)} />
                            </DropDwonWrapper>
                        )}
                        {(type === '3' || type === 'Maquina de Corte' || type === 'Scanner 3D') && (
                            <DropDwonWrapper>
                                <SelectWithBorderBottom data={Necessidade} size="medium" onChange={(e) => setNecessidade(e.target.value)} />
                            </DropDwonWrapper>
                        )}
                        <InputWithBorderBottom value={order?.descricao} size="large" type="text" placeholder="Descrição do objeto" onChange={(e) => setDescription(e.target.value)} />
                        <InputWithBorderBottom value={order?.comentario} size="large" type="text" placeholder="Comentário" onChange={(e) => setComment(e.target.value)} />
                        <SelectWithBorderBottom data={estado} size="large" onChange={(e) => setNewEstado(e.target.value)} />
                        <ButtonRight>
                            <Button size="small" buttonType="accept" title="Enviar" onClick={() => handleUpdate()} />
                            <Button size="small" buttonType="reject" title="Cancelar" onClick={() => setOpenOverlay(!openOverlay)} />
                        </ButtonRight>
                    </EditOrderOverlayContent>
                </EditOrderOverlayContainer>
            }
        </Table>
    )
}
import { ChangeEvent, useState } from "react"
import { SelectWithBorderBottom } from "../../../Components/SelectWithBorderBottom"
import { useAuth } from "../../../context/useAuth"
import { Contrainer, ButtonRight, DropDwonWrapper, GapContainer, InputCalendarWrapper } from "./styles"
import { InputWithBorderBottom } from "../../../Components/InputWithBorderBottom"
import { InputArchive } from "../../../Components/InputArchive"
import { Button } from "../../../Components/Button"
import { useLocation } from 'react-router-dom';

interface PedidoTypes {
    id_pedido: number
    maquina: string
    material: string
    prioridade: string
    descricao: string
    cor?: string
    comentario: string
}

export function EditOrder() {
    const { order, updateOrder } = useAuth();
    const [type, setType] = useState(order?.maquina);
    const [material, setMaterial] = useState(order?.material);
    const [necessidade, setNecessidade] = useState(order?.prioridade);
    const [turno, setTurno] = useState('');
    const [color, setColor] = useState(order?.cor);
    const [registration, setRegistration] = useState('');
    const [comment, setComment] = useState(order?.comentario);
    const [description, setDescription] = useState(order?.descricao);

    const [selectedFile, setSelectedFile] = useState<File | any>(null);
    const [fileName, setFileName] = useState<string | any>('Selecione um arquivo');

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        setFileName(file?.name)
        setSelectedFile(file);
    };
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

    const Turno_de_Preferencia = [
        { key: '', value: '', label: 'Turno de Preferência:', disabled: true, selected: true },
        { key: '1', value: 'Manhã', label: 'Manhã' },
        { key: '2', value: 'Tarde', label: 'Tarde' },
        { key: '3', value: 'Noite', label: 'Noite' },
        { key: '4', value: 'Madrugada', label: 'Madrugada' }
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

    const handleUpdate = async () => {

        if (order?.id_pedido && material && necessidade && type && selectedFile && description && comment) {
            await updateOrder(order.id_pedido, material, necessidade, type, selectedFile, 1, description, comment, order.estado, color)
        }
    }

    return (
        <>
            <Contrainer>
                <GapContainer>
                    <InputCalendarWrapper>
                        <SelectWithBorderBottom data={Tipo_de_Maquina} size="large" onChange={(e) => setType(e.target.value)} />
                    </InputCalendarWrapper>
                    {(type === '2' || type === 'Impressora de Resina' || type === 'Impressora de PLA' || type === 'Impressora de ABS') && (
                        <DropDwonWrapper>
                            <SelectWithBorderBottom data={Material} size="medium" onChange={(e) => setMaterial(e.target.value)} />
                            <SelectWithBorderBottom data={Turno_de_Preferencia} size="small" onChange={(e) => setTurno(e.target.value)} />
                            <SelectWithBorderBottom data={Necessidade} size="small" onChange={(e) => setNecessidade(e.target.value)} />
                            <SelectWithBorderBottom data={Cor_para_Impressao} size="small" onChange={(e) => setColor(e.target.value)} />
                        </DropDwonWrapper>
                    )}
                    {(type === '3' || type === 'Maquina de Corte' || type === 'Scanner 3D') && (
                        <DropDwonWrapper>
                            <SelectWithBorderBottom data={Turno_de_Preferencia} size="medium" onChange={(e) => setTurno(e.target.value)} />
                            <SelectWithBorderBottom data={Necessidade} size="medium" onChange={(e) => setNecessidade(e.target.value)} />
                        </DropDwonWrapper>
                    )}
                    <InputWithBorderBottom value={order?.descricao} size="large" type="text" placeholder="Descrição do objeto" onChange={(e) => setDescription(e.target.value)} />
                    <InputWithBorderBottom value={order?.comentario} size="large" type="text" placeholder="Comentário" onChange={(e) => setComment(e.target.value)} />
                    <InputArchive fileName={fileName} onChange={handleFileChange} />
                    <ButtonRight>
                        <Button size="small" buttonType="accept" title="Enviar" onClick={handleUpdate} />
                        <Button size="small" buttonType="reject" title="Cancelar" />
                    </ButtonRight>
                </GapContainer>
            </Contrainer>
        </>
    )
}
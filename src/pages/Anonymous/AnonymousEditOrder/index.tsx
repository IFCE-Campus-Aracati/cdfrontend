import { ChangeEvent, useState } from "react";
import { useAuth } from "../../../context/useAuth";
import { Contrainer, ButtonRight, Calendario, DropDwonWrapper, GapContainer, InputCalendarWrapper, TextLeft, TextSolitacao } from "./styles";
import { SelectWithBorderBottom } from "../../../Components/SelectWithBorderBottom";
import { InputWithBorderBottom } from "../../../Components/InputWithBorderBottom";
import { InputArchive } from "../../../Components/InputArchive";
import { Button } from "../../../Components/Button";
import { useNavigate } from "react-router-dom";

export function AnonymouEditOrder() {

    const { anonymousOrder,editAnonymousOrderByCode } = useAuth();
    const navigate = useNavigate();
    const [type, setType] = useState(anonymousOrder?.maquina);
    const [material, setMaterial] = useState(anonymousOrder?.material);
    const [turno, setTurno] = useState('');
    const [color, setColor] = useState(anonymousOrder?.cor);
    const [registration, setRegistration] = useState('');
    const [comment, setComment] = useState(anonymousOrder?.comentario);
    const [description, setDescription] = useState(anonymousOrder?.descricao);

    const [selectedFile, setSelectedFile] = useState<File | any>(null);
    const [fileName, setFileName] = useState<string | any>('Selecione um arquivo');

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        setFileName(file?.name)
        setSelectedFile(file);
    };
    const Tipo_de_Maquina = [
        { key: `${anonymousOrder?.id_pedidoAnonimo}`, value: `${anonymousOrder?.maquina}`, label: `${anonymousOrder?.maquina}`, disabled: true, selected: true },
        { key: '1', value: 'Impressora de Resina', label: 'Impressora de Resina' },
        { key: '2', value: 'Impressora de PLA', label: 'Impressora de PLA' },
        { key: '3', value: 'Impressora de ABS', label: 'Impressora de ABS' },
        { key: '4', value: 'Maquina de Corte', label: 'Maquina de Corte' },
        { key: '5', value: 'Scanner 3D', label: 'Scanner 3D' }
    ]

    const Material = [
        { key: `${anonymousOrder?.id_pedidoAnonimo}`, value: `${anonymousOrder?.material}`, label: `${anonymousOrder?.material}`, disabled: true, selected: true },
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
    const Cor_para_Impressao = [
        { key: `${anonymousOrder?.id_pedidoAnonimo}`, value: `${anonymousOrder?.cor}`, label: `${anonymousOrder?.cor}`, disabled: true, selected: true },
        { key: '1', value: 'Preto', label: 'Preto' },
        { key: '2', value: 'Vermelho', label: 'Vermelho' },
        { key: '3', value: 'Amarelo', label: 'Amarelo' },
        { key: '4', value: 'Azul', label: 'Azul' }
    ]

    const handleUpdate = async () => {

        if (anonymousOrder?.id_pedidoAnonimo && material && type && selectedFile && description && comment) {
            await editAnonymousOrderByCode(anonymousOrder.codigo, material, type, selectedFile, 1, description, comment, color);
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
                            <SelectWithBorderBottom data={Cor_para_Impressao} size="small" onChange={(e) => setColor(e.target.value)} />
                        </DropDwonWrapper>
                    )}
                    {(type === '3' || type === 'Maquina de Corte' || type === 'Scanner 3D') && (
                        <DropDwonWrapper>
                            <SelectWithBorderBottom data={Turno_de_Preferencia} size="medium" onChange={(e) => setTurno(e.target.value)} />
                        </DropDwonWrapper>
                    )}
                    <InputWithBorderBottom value={anonymousOrder?.descricao} size="large" type="text" placeholder="Descrição do objeto" onChange={(e) => setDescription(e.target.value)} />
                    <InputWithBorderBottom value={anonymousOrder?.comentario} size="large" type="text" placeholder="Comentário" onChange={(e) => setComment(e.target.value)} />
                    <InputArchive fileName={fileName} onChange={handleFileChange} />
                    <ButtonRight>
                        <Button size="small" buttonType="accept" title="Enviar" onClick={handleUpdate} />
                        <Button size="small" buttonType="reject" title="Cancelar" onClick={() => navigate("/non-user/home")}/>
                    </ButtonRight>
                </GapContainer>
            </Contrainer>
        </>
    )
}
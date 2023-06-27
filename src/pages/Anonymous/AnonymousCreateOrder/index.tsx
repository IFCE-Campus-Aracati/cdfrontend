import { ChangeEvent, useEffect, useState } from 'react';
import { SelectWithBorderBottom } from "../../../Components/SelectWithBorderBottom";
import { Button } from "../../../Components/Button";
import { InputWithBorderBottom } from "../../../Components/InputWithBorderBottom";
import {
    Contrainer, TextSolitacao,
    TextLeft, DropDwonWrapper,
    GapContainer, ButtonRight,
    InputCalendarWrapper,
    OverlayTitle,
    OverlayText,
    OverlayButtonContainer,
    OverlayContainer,
    OverlayContent
} from './styles'
import { InputArchive } from '../../../Components/InputArchive';
import { ToastContainer, toast } from 'react-toastify';
import { useAuth } from '../../../context/useAuth';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { ConfirmOverlay } from '../../../Components/ConfirmOverlay';

export function AnonymousCreateOrder() {

    const { createAnonymousOrder } = useAuth();
    const [type, setType] = useState('');
    const [material, setMaterial] = useState('');
    const [turno, setTurno] = useState('');
    const [color, setColor] = useState('');
    const [registration, setRegistration] = useState('');
    const [comment, setComment] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    const [showOverlay, setShowOverlay] = useState({ visible: false, response: '' });
    const [anonymousCode, setAnonymousCode] = useState('');

    const [selectedFile, setSelectedFile] = useState<File | any>(null);
    const [fileName, setFileName] = useState<string | any>('Selecione um arquivo');

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        setFileName(file?.name)
        setSelectedFile(file);
    };

    const Tipo_de_Maquina = [
        { key: '', value: '', label: 'Selecione o tipo de solicitação', disabled: true, selected: true },
        { key: '1', value: 'Impressora de Resina', label: 'Impressora de Resina' },
        { key: '2', value: 'Impressora de PLA', label: 'Impressora de PLA' },
        { key: '3', value: 'Impressora de ABS', label: 'Impressora de ABS' },
        { key: '4', value: 'Maquina de Corte', label: 'Maquina de Corte' },
        { key: '5', value: 'Scanner 3D', label: 'Scanner 3D' }
    ]

    const Material = [
        { key: '', value: '', label: 'Selecione o material', disabled: true, selected: true },
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
        { key: '', value: '', label: 'Cor para Impressão:', disabled: true, selected: true },
        { key: '1', value: 'Preto', label: 'Preto' },
        { key: '2', value: 'Vermelho', label: 'Vermelho' },
        { key: '3', value: 'Amarelo', label: 'Amarelo' },
        { key: '4', value: 'Azul', label: 'Azul' }
    ]

    const schema = Yup.object().shape({
        type: Yup.string()
            .required('Selecione a maquina'),
        material: Yup.string().required('Selecione o material'),
        selectedFile: Yup.mixed().test('file', 'Selecione um arquivo', (value) => {
            return value instanceof File;
        }),
        description: Yup.string().required('Faça uma descrição do objeto')
    });

    const handleOrder = async () => {

        const values = {
            type,
            material,
            selectedFile,
            description
        }
        try {
            await schema.validate(values, { abortEarly: false });
            const code = await createAnonymousOrder(material, type, selectedFile, 1, description, comment, color);
            setShowOverlay({ visible: true, response: code });
        } catch (error: any) {
            const errorMessages = (error as any).inner.map((e: any) => e.message);
            toast.error(`${errorMessages}`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    const closeOverlay = () => {
        setShowOverlay({ visible: false, response: '' });
        navigate('/non-user/home');
    };



    return (
        <>
            <Contrainer>
                <ToastContainer style={{ textAlign: 'left' }} />
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
                    <InputWithBorderBottom size="large" type="text" placeholder="Descrição do objeto" onChange={(e) => setDescription(e.target.value)} />
                    <InputWithBorderBottom size="large" type="text" placeholder="Comentário" onChange={(e) => setComment(e.target.value)} />
                    <InputArchive fileName={fileName} onChange={handleFileChange} />
                    <ButtonRight>
                        <Button size="small" buttonType="accept" title="Enviar" onClick={handleOrder} />
                        <Button size="small" buttonType="reject" title="Cancelar" />
                    </ButtonRight>
                </GapContainer>
                {
                    showOverlay.visible && showOverlay.response && (
                        <OverlayContainer>
                            <OverlayContent>
                                <OverlayTitle>Salve o código!!!</OverlayTitle>
                                <OverlayText>
                                    Sem o <b>código</b>, não será possível procurar sua <b>ordem de impressão</b>. Assim não será possível <b>editar</b> ou <b>excluir</b> seu pedido.
                                    <br></br>
                                    <br></br>
                                    Código: {showOverlay.response}
                                </OverlayText>
                                <OverlayButtonContainer>
                                    <Button size="small" buttonType="reject" title="Fechar" onClick={() => (closeOverlay())}></Button>
                                </OverlayButtonContainer>
                            </OverlayContent>
                        </OverlayContainer>
                    )
                }
            </Contrainer>
        </>
    )
}
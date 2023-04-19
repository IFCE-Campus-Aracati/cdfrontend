import  {useState} from 'react';
import { SelectWithBorderBottom } from "../../Components/SelectWithBorderBottom";
import { SelectWithDropDow } from "../../Components/SelectWithDropDow";
import { Button } from "../../Components/Button";
import { CalendarComponent } from "../../Components/CalendarComponents";
import { Header } from '../../Components/Header'
import { InputWithBorderBottom } from "../../Components/InputWithBorderBottom";
import { Contrainer,
    LoginWrap, TextSolitacao,
    TextLeft, DropDwonWrapper,
    GapContainer, ButtonRight,
    InputCalendarWrapper} from './styles'

export function Solitacoes(){
    
    const [type, setType] = useState('');

    const Tipo_de_Maquina = [
        { key: '', value: '', label: 'Tipo de Maquina:', disabled: true, selected: true},
        { key: '2', value: 'Impressora de Resina', label: 'Impressora de Resina' },
        { key: '2', value: 'Impressora de PLA', label: 'Impressora de PLA' },
        { key: '2', value: 'Impressora de ABS', label: 'Impressora de ABS' },
        { key: '3', value: 'Maquina de Corte', label: 'Maquina de Corte' },
        { key: '3', value: 'Scanner 3D', label: 'Scanner 3D' }
    ]
    const Turno_de_Preferencia = [
        { value: '', label: 'Turno de Preferência:', disabled: true, selected: true},
        { value: 'Manhã', label: 'Manhã' },
        { value: 'Tarde', label: 'Tarde' },
        { value: 'Noite', label: 'Noite' },
        { value: 'Madrugada', label: 'Madrugada' }
    ]
    const Necessidade = [
        { value: '', label: 'Necessidade:', disabled: true, selected: true},
        { value: 'Alta', label: 'Alta' },
        { value: 'Média', label: 'Média' },
        { value: 'Baixa', label: 'Baixa' }
    ]
    const Cor_para_Impressao = [
        { value: '', label: 'Cor para Impressão:', disabled: true, selected: true},
        { value: 'Preto', label: 'Preto' },
        { value: 'Vermelho', label: 'Vermelho' },
        { value: 'Amarelo', label: 'Amarelo' },
        { value: 'Azul', label: 'Azul' }
    ]

    return (
        <>
        <Header route="user"/>
        <Contrainer>
            <LoginWrap>
                <GapContainer>
                    <TextLeft><TextSolitacao>Solicitação</TextSolitacao></TextLeft>
                    <InputWithBorderBottom size="large" type="text" placeholder="Nome Completo" />
                    <InputWithBorderBottom size="large" type="text" placeholder="Matricula" />
                    <InputWithBorderBottom size="large" type="text" placeholder="E-mail" />
                    <InputCalendarWrapper>
                        <SelectWithBorderBottom  data={Tipo_de_Maquina} size="medium" onChange={(e) => setType(e.target.value)}/>
                        <CalendarComponent size='medium' />
                    </InputCalendarWrapper>
                        {(type === '2' || type === 'Impressora de Resina' || type === 'Impressora de PLA' || type === 'Impressora de ABS') && (
                            <DropDwonWrapper>
                                <SelectWithDropDow  data={Turno_de_Preferencia} size="small"/>
                                <SelectWithDropDow  data={Necessidade} size="small"/>
                                <SelectWithDropDow  data={Cor_para_Impressao} size="small"/>
                            </DropDwonWrapper>
                        )}
                        { (type === '3' || type === 'Maquina de Corte' || type === 'Scanner 3D') && (
                            <DropDwonWrapper>
                                <SelectWithDropDow  data={Turno_de_Preferencia} size="medium"/>
                                <SelectWithDropDow  data={Necessidade} size="medium"/>
                            </DropDwonWrapper>
                        )}
                    <InputWithBorderBottom size="large" type="text" placeholder="Descrição" />
                    <InputWithBorderBottom size="large" type="text" placeholder="Procurar arquivos" />
                    <ButtonRight><Button size="small" buttonType="reject" title="CANCELAR"/>
                    <Button size="small" buttonType="accept" title="ENVIAR"/></ButtonRight> 
                </GapContainer>
            </LoginWrap>
        </Contrainer>
        </>
    )
}
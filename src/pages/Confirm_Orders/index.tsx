import {Contrainer, LoginWrap, GapContainer, ButtonRight, InputCalendarWrapper, 
        DropDwonWrapper, TextReference,TextReferenceWrapper, TextLeft, TurnoUrgenciaCorWrapper, TextConfirm_Orders} from './styles'
import { Button } from "../../Components/Button";
import { Header } from '../../Components/Header'
import { InputWithBorderBottom } from "../../Components/InputWithBorderBottom";

export function Confirm_Orders(){
    return (
        <>
        <Header route="user"/>
        <Contrainer>
            <LoginWrap>
                <GapContainer>
                        <TextLeft><TextConfirm_Orders>Confirmar Pedidos</TextConfirm_Orders></TextLeft>
                        <TextReference >Nome</TextReference >
                        <InputWithBorderBottom size="large" type="text" placeholder="Bryan Lima Cavalcante" />
                        <TextReference >Matricula</TextReference >
                        <InputWithBorderBottom size="large" type="text" placeholder="20171135000050" />
                        <TextReference >E-mail</TextReference >
                        <InputWithBorderBottom size="large" type="text" placeholder="bryan@gmail.com" />
                        <TextReferenceWrapper> <TextReference >Máquina</TextReference > <TextReference >Data</TextReference> </TextReferenceWrapper>
                        <InputCalendarWrapper>
                            <InputWithBorderBottom size="medium" type="text" placeholder="Impressora de Resina" />
                            <InputWithBorderBottom size="medium" type="text" placeholder="19/04/2023" />
                        </InputCalendarWrapper>
                        <TurnoUrgenciaCorWrapper> <TextReference >Turno</TextReference>
                                                  <TextReference >Nv. de urgência</TextReference>
                                                  <TextReference >Cor do filamento</TextReference>   </TurnoUrgenciaCorWrapper>
                        <DropDwonWrapper>
                            <InputWithBorderBottom size="small" type="text" placeholder="Tarde" />
                            <InputWithBorderBottom size="small" type="text" placeholder="Normal" />
                            <InputWithBorderBottom size="small" type="text" placeholder="Vermelho" />
                        </DropDwonWrapper>

                        <TextReference >Descrição</TextReference >
                        <InputWithBorderBottom size="large" type="text" placeholder="20x20 de uma mini vaca" />
                        <TextReference >Arquivo</TextReference >
                        <InputWithBorderBottom size="large" type="text" placeholder="E-mail" />

                        <ButtonRight><Button size="small" buttonType="accept" title="Aceitar"/>
                        <Button size="small" buttonType="reject" title="Rejeitar"/></ButtonRight>
                         
                </GapContainer>
            </LoginWrap>
        </Contrainer>
        </>
    )
}



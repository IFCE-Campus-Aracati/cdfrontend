import {Contrainer, LoginWrap, GapContainer, ButtonRight, InputCalendarWrapper, DropDwonWrapper, TextReference , TextLeft, TextConfirm_Orders} from './styles'
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
                        <InputWithBorderBottom size="large" type="text" placeholder="Nome Completo" />
                        <TextReference >Matricula</TextReference >
                        <InputWithBorderBottom size="large" type="text" placeholder="Matricula" />
                        <TextReference >E-mail</TextReference >
                        <InputWithBorderBottom size="large" type="text" placeholder="E-mail" />
                        <InputCalendarWrapper>
                            <TextReference >Máquina</TextReference >
                            <InputWithBorderBottom size="medium" type="text" placeholder="Matricula" />
                            <TextReference >Data</TextReference >
                            <InputWithBorderBottom size="medium" type="text" placeholder="E-mail" />
                        </InputCalendarWrapper>
                        <DropDwonWrapper>
                            <TextReference >Turno</TextReference >
                            <InputWithBorderBottom size="small" type="text" placeholder="Matricula" />
                            <TextReference >Nv. de urgência</TextReference >
                            <InputWithBorderBottom size="small" type="text" placeholder="E-mail" />
                            <TextReference >Cor do filamento</TextReference >
                            <InputWithBorderBottom size="small" type="text" placeholder="E-mail" />
                        </DropDwonWrapper>
                        <TextReference >Descrição</TextReference >
                        <InputWithBorderBottom size="large" type="text" placeholder="E-mail" />
                        <TextReference >Arquivo</TextReference >
                        <InputWithBorderBottom size="large" type="text" placeholder="E-mail" />
                        <ButtonRight><Button size="small" buttonType="reject" title="CANCELAR"/>
                        <Button size="small" buttonType="accept" title="Aceitar"/></ButtonRight> 
                </GapContainer>
            </LoginWrap>
        </Contrainer>
        </>
    )
}



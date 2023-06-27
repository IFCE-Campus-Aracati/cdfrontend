import { useState } from "react";
import { useAuth } from "../../../context/useAuth";
import { Container, Button, ButtonContainer, ConfigButton, ConfigContainer, DeleteButton, EmailContent, PerfilContent, PhotoContainer, TextContainer } from "./styles";
import { GearSix, PencilSimple } from "phosphor-react";

export function AdminProfile() {
    const { user } = useAuth();
    const [openConfig, setOpenConfig] = useState(false);
    return (
        <Container>
            <PerfilContent>
                <PhotoContainer>

                </PhotoContainer>
                <TextContainer>
                    <ButtonContainer>
                        {user?.nome}
                        <Button ><PencilSimple size={18} /></Button>
                    </ButtonContainer>
                    <EmailContent>{user?.email}</EmailContent>

                    <ConfigButton onClick={() => setOpenConfig(!openConfig)} >
                        {openConfig ? <GearSix size={18} style={{ rotate: '360deg', transition: '300ms' }} /> : <GearSix size={18} />}
                    </ConfigButton>
                    {openConfig ? <ConfigContainer>
                        <DeleteButton>Deletar conta</DeleteButton>
                    </ConfigContainer> : <div></div>}
                </TextContainer>


            </PerfilContent>
        </Container>
    )
}
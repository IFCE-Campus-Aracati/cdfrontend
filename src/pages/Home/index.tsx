import {
    Body,
    MainLeft,
    MainRight,
    Footer,
    HomeContainer,
    Title,
    Text,
    Button,
    TextContainer,
    HeaderContainer,
    HeaderButton,
    HeaderButtonContainer,
    LogoContainer,
    MenuButton,
    NavMenuContainer,
    NewOrderButton,
    UserButtonContainer
} from "./styles";
import { EnvelopeSimple, ArrowRight, List, Plus, Headset } from "phosphor-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    return (
        <HomeContainer>
            <HeaderContainer>
                <LogoContainer>
                    Code Crafters
                </LogoContainer>
                <MenuButton onClick={() => setIsOpen(!isOpen)} >
                    <List size={32} color='#fff' />
                </MenuButton>
                <HeaderButtonContainer>
                    <NewOrderButton onClick={() => navigate('/non-user/createorder')}>
                        <Plus size={16} weight="bold" className="Icon" />
                        Nova impressão
                    </NewOrderButton>
                    <UserButtonContainer>
                        <HeaderButton onClick={() => navigate('/signin')} >Entrar</HeaderButton>
                        <HeaderButton onClick={() => navigate('/signup')} >Cadastro</HeaderButton>
                    </UserButtonContainer>
                </HeaderButtonContainer>
            </HeaderContainer>
            <Body>
                {
                    isOpen ? <NavMenuContainer>
                        <HeaderButton>Inicio</HeaderButton>
                        <HeaderButton>Agendar</HeaderButton>
                        <HeaderButton>Entrar</HeaderButton>
                        <HeaderButton>Cadastrar</HeaderButton>
                    </NavMenuContainer> : <div></div>
                }
                <MainLeft>
                    <TextContainer>
                        <Title>Bem-vindo ao Code Crafters sistema de impressão 3D, scanner e corte a laser!</Title>
                        <Text>Transforme suas ideias em realidade com nossos serviços. Ajudamos a criar objetos personalizados, protótipos e peças de reposição. Seja estudante, entusiasta ou profissional, atenderemos às suas necessidades. Junte-se à nossa comunidade e aproveite as vantagens da tecnologia 3D. Dê vida às suas criações agora!
                        </Text>
                    </TextContainer>
                    <Button onClick={() => navigate('non-user/home')} >Iniciar<ArrowRight size={32} color='#fff' style={{ position: 'absolute', right: `3rem` }} /></Button>
                </MainLeft>

            </Body>
            <Footer>
                <Headset size={16} color='#fff' />
                suporte@gmail.com
            </Footer>
        </HomeContainer >
    );
}
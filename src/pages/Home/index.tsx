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
    NavMenuContainer
} from "./styles";
import { EnvelopeSimple, ArrowRight, List } from "phosphor-react";
import { useState } from "react";

export function Home() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <HomeContainer>
            <HeaderContainer>
                <LogoContainer>
                    LOGO
                </LogoContainer>
                <MenuButton onClick={() => setIsOpen(!isOpen)} >
                    <List size={32} color='#fff' />
                </MenuButton>
                <HeaderButtonContainer>
                    <HeaderButton>Inicio</HeaderButton>
                    <HeaderButton>Agendar</HeaderButton>
                    <HeaderButton>Entrar</HeaderButton>
                    <HeaderButton>Cadastrar</HeaderButton>
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
                        <Title>Lorem ipsum dolor sit amet,consectetur adipiscing elit.</Title>
                        <Text>
                            Maecenas vestibulum aliquet massa,
                            eget varius magna pharetra nec.
                            Donec sed aliquam nunc,sed tincidunt mauris.
                            Ut vehicula, quam atpharetra placerat,
                            massa sem fermentumligula,at tincidunt enim arcu velmassa.
                            Aliquam porttitor lacus in dolor lobortis,
                            et rutrum orci dignissim. Duis euismod eros sit amet tempus dignissim.
                            Nam aliquet dolor a tempor tempor.
                            Nulla volutpat, turpis quis bibendum maximus,
                            metus tellus placerat massa
                        </Text>
                    </TextContainer>
                    <Button>Agendar <ArrowRight size={32} color='#fff' style={{ position: 'absolute', right: `3rem` }} /></Button>
                </MainLeft>
                <MainRight>
                </MainRight>
            </Body>
            <Footer>
                <EnvelopeSimple size={24} color='#fff' style={{ marginRight: `0.5rem` }} />
                suporte@gmail.com
            </Footer>
        </HomeContainer >
    );
}
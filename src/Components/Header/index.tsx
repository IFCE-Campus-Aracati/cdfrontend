import { Bell, MagnifyingGlass, User, } from "phosphor-react";
import { HeaderContainer, Button, MenuIcon, RedDot, Search, InputContainer, Logo, IconsContainer, MenuTitle } from "./styles";
import { useState } from "react";
import { RightNavBar } from "../RightNavBar";
import { NotificationCard } from "../NotificationCard";

interface HeaderProps {
    route: "user" | "non-user" | "admin"
}

interface ComponentProps {
    name: string;
}

export function Header({ route }: HeaderProps) {
    const [selectedComponent, setSelectedComponent] = useState<string>('A');

    const handleButtonClick = (component: string) => {   
            setSelectedComponent(component);
            setOpenMenu(!openMenu)
            
    };

    const [openMenu, setOpenMenu] = useState(false);


    const renderComponent = () => {
        switch (selectedComponent) {
            case 'A':
                return (
                    openMenu ? (<RightNavBar>
                        <MenuTitle>Menu</MenuTitle>
                    </RightNavBar>) : (<div style={{ height: 0, width: 0 }} ></div>)
                );
            case 'B':
                return (
                    openMenu ? (
                    <RightNavBar>
                        <MenuTitle>Notificações</MenuTitle>
                        <NotificationCard date="Domingo" notification="aceitou sua requisição para impressão 3D na" userName="Luan" ></NotificationCard>
                        <NotificationCard date="Domingo" notification="aceitou sua requisição para impressão 3D na" userName="Luan" ></NotificationCard>
                        <NotificationCard date="Domingo" notification="aceitou sua requisição para impressão 3D na" userName="Luan" ></NotificationCard>
                        <NotificationCard date="Domingo" notification="aceitou sua requisição para impressão 3D na" userName="Luan" ></NotificationCard>
                        <NotificationCard date="Domingo" notification="aceitou sua requisição para impressão 3D na" userName="Luan" ></NotificationCard>
                    </RightNavBar>
                    ) : (<div style={{ height: 0, width: 0 }} ></div>)
                );
            case 'C':
                return (
                    openMenu ? (<RightNavBar>
                        <MenuTitle>Perfil</MenuTitle>
                    </RightNavBar>) : (<div style={{ height: 0, width: 0 }} ></div>)
                );
        }
    };

    return (
        <HeaderContainer>
            <Logo></Logo>
            <InputContainer>
                <Search
                    placeholder="Pesquisar..."
                    type='text' />
                <MagnifyingGlass size={32} color="#929292" weight="bold" />
            </InputContainer>

            {
                route === "user" ? (
                    <IconsContainer>
                        {/* <Button>
                            <MenuIcon />
                        </Button>
                        <Button>
                            <Bell size={32} color="#ffffff" weight="fill" />
                            <RedDot />
                        </Button>
                        <Button>
                            <User size={32} color="#ffffff" weight="fill" />
                        </Button>
                        {

                        } */}
                        <>

                            <Button
                                onClick={() => handleButtonClick('A')}
                            >
                                <MenuIcon />
                            </Button>
                            <Button

                                onClick={() => handleButtonClick('B')}
                            >
                                <Bell size={32} color="#ffffff" weight="fill" />
                                <RedDot />
                            </Button>
                            <Button

                                onClick={() => handleButtonClick('C')}
                            >
                                <User size={32} color="#ffffff" weight="fill" />
                            </Button>

                            {renderComponent()}
                        </>
                    </IconsContainer>
                ) : (
                    route === "admin" ? (
                        <IconsContainer>
                            <Button>
                                <MenuIcon />
                            </Button>
                            <Button >
                                <Bell size={32} color="#ffffff" weight="fill" />
                                <RedDot />
                            </Button>
                            <Button>
                                <User size={32} color="#ffffff" weight="fill" />
                            </Button>

                        </IconsContainer>
                    ) : (
                        <IconsContainer>
                            <Button></Button>
                            <Button>
                                <User size={32} color="#ffffff" weight="fill" />
                            </Button>
                        </IconsContainer>
                    ))
            }

        </HeaderContainer>
    );
}
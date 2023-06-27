import { Bell, CaretDown, ClipboardText, House, Plus, SignOut, User, UserCircle, } from "phosphor-react";
import { HeaderContainer, Button, RedDot, UserButton, Logo, IconsContainer, MenuTitle, PerfilContainer, NewOrderButton, MenuButtonContainer, MenuButton, NavBarContainer } from "./styles";
import { useState } from "react";
import { RightNavBar } from "../RightNavBar";
import { NotificationCard } from "../NotificationCard";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";


interface HeaderProps {
    route: "user" | "non-user" | "admin"
}

interface ComponentProps {
    name: string;
}

interface ButtonInfo {
    text: string;
    icon: JSX.Element;
    position: 'absolute' | 'relative';
    route?: string
}

interface AdminButtons {
    text: string;
    icon: JSX.Element;
    position: 'absolute' | 'relative';
    route?: string
}

export function Header({ route }: HeaderProps) {
    const [selectedComponent, setSelectedComponent] = useState<string>('A');

    const handleOpenMenu = (component: string) => {
        setSelectedComponent(component);
        setOpenMenu(!openMenu)

    };

    const buttonsInfo: ButtonInfo[] = [
        { text: 'Home', icon: <House size={32} weight="bold" />, position: 'relative', route: 'production' },
        { text: 'Conta', icon: <UserCircle size={32} weight="bold" />, position: 'relative', route: 'profile' },
        { text: 'Logout', icon: <SignOut size={32} weight="bold" />, position: 'absolute' },
        
    ];

    const adminButtons: AdminButtons[] = [
        { text: 'Home', icon: <House size={32} weight="bold" />, position: 'relative', route: 'users' },
        { text: 'Conta', icon: <UserCircle size={32} weight="bold" />, position: 'relative', route: 'profile' },
        { text: 'Logout', icon: <SignOut size={32} weight="bold" />, position: 'absolute' },
        { text: 'Lista de pedidos', icon: <ClipboardText size={32} weight="bold"/>, position: 'relative', route: 'orderlist' },
    ];

    const [openMenu, setOpenMenu] = useState(false);
    const navigate = useNavigate();
    const { signOut } = useAuth();

    const handleButtonClick = (index: number) => {
        if (index === 0) {
            navigate('/user/production');
            setOpenMenu(!openMenu);
        } else if(index === 2){
            signOut();
        }else {
            navigate(`/user/${buttonsInfo[index].route}`);
            setOpenMenu(!openMenu);
        }
    };

    const handleAdminButtonClick = (index: number) => {
        if (index === 0) {
            navigate('/admin/users');
            setOpenMenu(!openMenu);
        } else if(index === 2){
            signOut();
        }else {
            navigate(`/admin/${adminButtons[index].route}`);
            setOpenMenu(!openMenu);
        }
    };

    const userMenu = () => {
        switch (selectedComponent) {
            case 'C':
                return (
                    openMenu && (
                        <RightNavBar>
                            <NavBarContainer>
                                <MenuTitle>Menu</MenuTitle>

                                <MenuButtonContainer>
                                    {buttonsInfo.map((buttonInfo, index) => (
                                        <MenuButton
                                            key={index}
                                            selected={location.pathname.includes(`/user/${buttonInfo.route}`)}
                                            onClick={() => handleButtonClick(index)}
                                            style={{ position: `${buttonInfo.position}`, bottom: `1rem` }}
                                        >
                                            {buttonInfo.icon}
                                            {buttonInfo.text}
                                        </MenuButton>
                                    ))}
                                </MenuButtonContainer>
                            </NavBarContainer>
                        </RightNavBar>
                    ) 
                );
        }
    };

    const adminMenu = () => {
        switch (selectedComponent) {
            case 'C':
                return (
                    openMenu && (
                        <RightNavBar>
                            <NavBarContainer>
                                <MenuTitle>Menu</MenuTitle>

                                <MenuButtonContainer>
                                    {adminButtons.map((adminButton, index) => (
                                        <MenuButton
                                            key={index}
                                            selected={location.pathname.includes(`/admin/${adminButton.route}`)}
                                            onClick={() => handleAdminButtonClick(index)}
                                            style={{ position: `${adminButton.position}`, bottom: `1rem` }}
                                        >
                                            {adminButton.icon}
                                            {adminButton.text}
                                        </MenuButton>
                                    ))}
                                </MenuButtonContainer>
                            </NavBarContainer>
                        </RightNavBar>
                    ) 
                );
        }
    };

    const nonUserMenu = () => {
        switch (selectedComponent) {
            case 'C':
                return (
                    openMenu && (
                        <RightNavBar>
                            <MenuTitle>Perfil</MenuTitle>
                            <UserButton onClick={() => navigate("/")} >Inicio</UserButton>
                            <UserButton onClick={() => navigate("/signin")} >Entrar</UserButton>
                            <UserButton onClick={() => navigate("/signup")} >Cadastro</UserButton>
                        </RightNavBar>
                    ) 
                );
        }
    };

    return (
        <HeaderContainer>
            <Logo></Logo>

            {
                route === "user" ? (
                    <IconsContainer>
                        <>
                            <NewOrderButton onClick={() => navigate('/user/createorder')} >
                                <Plus size={16} weight="bold" className="Icon" />
                                Nova Impressão
                            </NewOrderButton>

                            <PerfilContainer onClick={() => handleOpenMenu('C')} >
                                <Button>
                                    <User size={22} color="#ffffff" weight="fill" />
                                </Button>
                                {openMenu ? (<CaretDown size={16} color="#ffffff" weight="bold" style={{ rotate: '180deg', transition: '300ms' }} />) : (<CaretDown size={16} color="#ffffff" weight="bold" style={{ transition: '300ms' }} />)}
                            </PerfilContainer>
                            {userMenu()}
                        </>
                    </IconsContainer>
                ) : (
                    route === "admin" ? (
                        <>
                            <IconsContainer>
                                <PerfilContainer onClick={() => handleOpenMenu('C')} >
                                    <Button>
                                        <User size={22} color="#ffffff" weight="fill" />
                                    </Button>
                                    {openMenu ? (<CaretDown size={16} color="#ffffff" weight="bold" style={{ rotate: '180deg', transition: '300ms' }} />) : (<CaretDown size={16} color="#ffffff" weight="bold" style={{ transition: '300ms' }} />)}
                                </PerfilContainer>
                                {adminMenu()}
                            </IconsContainer>
                        </>
                    ) : (
                        <IconsContainer>
                            <>
                                <NewOrderButton onClick={() => navigate('/non-user/createorder')} >
                                    <Plus size={16} weight="bold" className="Icon" />
                                    Nova Impressão
                                </NewOrderButton>
                                <PerfilContainer onClick={() => handleOpenMenu('C')} >
                                    <Button>
                                        <User size={22} color="#ffffff" weight="fill" />
                                    </Button>
                                    {openMenu ? (<CaretDown size={16} color="#ffffff" weight="bold" style={{ rotate: '180deg', transition: '300ms' }} />) : (<CaretDown size={16} color="#ffffff" weight="bold" style={{ transition: '300ms' }} />)}
                                </PerfilContainer>
                                {nonUserMenu()}
                            </>
                        </IconsContainer>
                    ))
            }

        </HeaderContainer>
    );
}
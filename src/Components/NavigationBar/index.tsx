import { useNavigate, useLocation } from "react-router-dom";
import { Button, ButtonContainer, InputContainer, NavigationContainer, Search } from "./styles";
import { useEffect, useLayoutEffect, useState } from "react";
import { MagnifyingGlass } from "phosphor-react";

interface ButtonInfo {
    text: string;
    route: string;
}

export function NavigationBar({ ...rest }) {

    const navigate = useNavigate();
    const location = useLocation();

    const buttonsInfo: ButtonInfo[] = [
        { text: 'Em produção', route: 'production' },
        { text: 'Em Análise', route: 'analysis' },
        { text: 'Aprovados', route: 'accepted' },
        { text: 'Rejeitados', route: 'rejected' },
        { text: 'Todos os pedidos', route: 'allOrders' },
    ];

    const handleButtonClick = (index: number) => {
        if (index === 0) {
          navigate('/user/production');
        } else {
          navigate(`/user/${buttonsInfo[index].route}`);
        }
      };

    return (
        <NavigationContainer  {...rest}>
            <>
                <ButtonContainer>
                    {buttonsInfo.map((buttonInfo, index) => (
                        <Button
                            key={index}
                            selected={location.pathname.includes(`/user/${buttonInfo.route}`)}
                            onClick={() => handleButtonClick(index)}
                        >
                            {buttonInfo.text}
                        </Button>
                    ))}
                </ButtonContainer>
                <InputContainer>
                    <Search
                        placeholder="Pesquisar..."
                    />
                    <MagnifyingGlass size={24} color="#929292" weight="bold" />
                </InputContainer>
            </>
        </NavigationContainer>
    )
}
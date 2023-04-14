import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "../../Components/Header";
import { NavigationBar } from "../../Components/NavigationBar";
import { Button, Container, QtyDot } from "./styles";
import { useState } from "react";

interface ButtonInfo {
    text: string;
    color: 'background-blue-light' | 'background-green-light' | 'background-red-light' | 'background-yellow-light' | 'background-gray-light' | 'transparent';
    dotColor: 'background-blue' | 'background-green' | 'background-red' | 'background-yellow' | 'transparent';
    qtyDot?: string
}

export function UserTheme() {

    const navigate = useNavigate();

    const buttonsInfo: ButtonInfo[] = [
        { text: 'Em produção', color: 'background-blue-light', dotColor: 'background-blue', qtyDot: "1" },
        { text: 'Em Análise', color: 'background-yellow-light', dotColor: 'background-yellow', qtyDot: "15" },
        { text: 'Aprovados', color: 'background-green-light', dotColor: 'background-green', qtyDot: "20" },
        { text: 'Rejeitados', color: 'background-red-light', dotColor: 'background-red', qtyDot: "40" },
        { text: 'Todos os pedidos', color: 'background-gray-light', dotColor: 'transparent' },
    ];
    
    const [selectedButtonIndex, setSelectedButtonIndex] = useState<number>(0);

    const handleButtonClick = (index: number) => {
        setSelectedButtonIndex(index);
        if (index === 0) {
            navigate("/user/production")
        } else {
            if (index === 1) {
                navigate("/user/analysis")
            } else {
                if (index === 2) {
                    navigate("/user/accepted")
                } else {
                    if (index === 3) {
                        navigate("/user/rejected")
                    } else {
                        if (index === 4) {
                            navigate("/user/allorders")
                        }
                    }
                }
            }
        }
    };

    return (
        <Container>
            <Header route="user" />
            <NavigationBar>
            <>
                    {buttonsInfo.map((buttonInfo, index) => (
                        <Button
                            key={index}
                            selected={selectedButtonIndex === index}
                            backgroundColor={buttonInfo.color}
                            onClick={() => handleButtonClick(index)}
                        >
                            <QtyDot backgroundColor={buttonInfo.dotColor} >{buttonInfo.qtyDot}</QtyDot>
                            {buttonInfo.text}
                            
                        </Button>
                    ))}
                </>
            </NavigationBar>
            <Outlet />
        </Container>

    )
}
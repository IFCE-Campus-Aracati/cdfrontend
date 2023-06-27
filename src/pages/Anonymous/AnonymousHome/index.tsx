import { MagnifyingGlass } from "phosphor-react";
import { Input, InputContainer, OrderContainer, SearchButton, SearchContainer, SearchTitle, Title, Button, SearchTitleContainer } from "./styles";
import { useState } from "react";
import { useAuth } from "../../../context/useAuth";
import { useNavigate } from "react-router-dom";


export function AnonymousHome() {
    const { findAnonymousOrderByCode } = useAuth();
    const [code, setCode] = useState('')
    const navigate = useNavigate();

    const handleOrderByCode = async() => {
       await findAnonymousOrderByCode(code).then((response) => {
        navigate('/non-user/order');
       });

    }

    return (
        <OrderContainer>
            <Title>Buscar pedido</Title>
            <SearchContainer>
                <SearchTitleContainer>
                    <SearchTitle>
                        Deseja acompanhar seu pedido?
                    </SearchTitle>
                    <SearchTitle>
                        Digite seu <p>código de pedido.</p>
                    </SearchTitle>
                </SearchTitleContainer>
                <InputContainer>
                    <Input
                        placeholder="$10$uySAs1LUlomURffgeE8w/.yK9XP8zSPeP62R2Kuyz3Ot/tGhNa0oW"
                        onChange={(e) => setCode(e.target.value)}
                    />
                    <SearchButton onClick={handleOrderByCode} >
                        <MagnifyingGlass size={32} className="icon" />
                    </SearchButton>
                </InputContainer>
                <Button onClick={handleOrderByCode} >Buscar</Button>
            </SearchContainer>
        </OrderContainer>
    )
}
import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "../../Components/Header";
import { NavigationBar } from "../../Components/NavigationBar";
import { Button, ButtonContainer, Container, InputContainer, Search } from "./styles";
import { useState } from "react";
import { MagnifyingGlass } from "phosphor-react";


export function NonUserTheme() {
    return (
        <Container>
            <Header route="non-user" />
            <Outlet />
        </Container>

    )
}
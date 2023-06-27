import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "../../Components/Header";
import { NavigationBar } from "../../Components/NavigationBar";
import {Container} from "./styles";


export function UserTheme() {
    return (
        <Container>
            <Header route="user" />
            <NavigationBar/>
            <Outlet />
        </Container>

    )
}
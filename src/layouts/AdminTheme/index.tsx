import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "../../Components/Header";
import { NavigationBar } from "../../Components/NavigationBar";
import {Container} from "./styles";


export function AdminTheme() {
    return (
        <Container>
            <Header route="admin" />
            <Outlet />
        </Container>

    )
}
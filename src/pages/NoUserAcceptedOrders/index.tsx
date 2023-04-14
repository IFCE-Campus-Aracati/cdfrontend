import { Card } from "../../Components/Card";
import { UserTable } from "../../Components/UserTable";
import { Container } from "./styles";

export function NoUserAcceptedOrders(){
    return(
        <Container>
            <UserTable backgroundColor="background-green-light" borderColor="background-green" ></UserTable>
        </Container>
    )
}
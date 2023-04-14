import { Container, Content } from "./styles";

export function ConfirmOverlay({...rest}){
    return(
        <Container> 
            <Content {...rest} ></Content>
         </Container>
    )
}
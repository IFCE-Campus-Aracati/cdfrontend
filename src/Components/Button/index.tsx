import { Container } from "./styles";

interface ButtonProps{
    buttonType: 'accept' | 'reject'
    size: 'small' | 'medium'| 'large'
    title?: string
}

export function Button({buttonType, size, title}: ButtonProps){
    return(
        <Container buttonType={buttonType} size={size} >{title}</Container>
    );
}
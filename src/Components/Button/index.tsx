import { Container } from "./styles";

interface ButtonProps{
    buttonType: 'accept' | 'reject'
    size: 'small' | 'medium'| 'large'
    title?: string
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export function Button({buttonType, size, title, ...rest}: ButtonProps){
    return(
        <Container buttonType={buttonType} size={size} {...rest}>{title}</Container>
    );
}
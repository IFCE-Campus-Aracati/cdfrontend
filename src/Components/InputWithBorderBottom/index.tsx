import { Container, Input } from "./styles";

interface InputProps {
    size: 'small' | 'medium' | 'large'
    placeholder: string
    type: 'text' | 'password'
}

export function InputWithBorderBottom({size, placeholder, type, ...rest}: InputProps){
    return(
        <Container size={size}>
            <Input
                placeholder={placeholder}
                type={type}
                {...rest}
            />
        </Container>
    );
}
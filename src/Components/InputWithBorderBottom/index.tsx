import { Container, Input } from "./styles";

interface InputProps {
    size: 'small' | 'medium' | 'large'
    placeholder: string
    type: 'text' | 'password'
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string
}

export function InputWithBorderBottom({size, placeholder, type, onChange, value, ...rest}: InputProps){
    return(
        <Container size={size}>
            <Input
                defaultValue={value}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                {...rest}
            />
        </Container>
    );
}
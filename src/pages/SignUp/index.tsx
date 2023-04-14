import { InputWithBorderBottom } from "../../Components/InputWithBorderBottom";
import { Button } from "../../Components/Button";
import { SelectWithDropDow } from "../../Components/SelectWithDropDow";
import { useState } from 'react'
import { GlobalStyle, 
    Container,
    LoginContrainer, 
    LoginWrap, 
    LoginTitle,
    TextTitle,} from './styles'

export function SignUp(){
    // const [nome, setNome] = useState('');
    // const [email, setEmail] = useState('');
    // const [matricula, setMatrícula] = useState('');
    // const [opcao, setOpcao] = useState('opcao1');
    // const [senha, setSenha] = useState('');

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log("Formulario enviado!");
    //     console.log("Nome:", nome);
    //     console.log("E-mail:", email);
    //     console.log("Matrícula:", matricula);
    //     console.log("Opcao:", opcao);
    //     console.log("Senha:", senha);
    // };
    const options = [
        { value: '', label: 'Cargo', disabled: true, selected: true, hidden: true },
        { value: '1', label: 'Professor' },
        { value: '2', label: 'Aluno' },
        { value: '2', label: 'Externo' }
    ]
    return (
        <>
        <GlobalStyle />
        <Container>
            <LoginContrainer>
                <LoginWrap>
                    {/* <form onSubmit={handleSubmit}> */}
                        <TextTitle><LoginTitle>Sign Up</LoginTitle></TextTitle>
                        <InputWithBorderBottom size="large" type="text" placeholder="Nome Completo" />
                        <InputWithBorderBottom size="large" type="text" placeholder="E-mail" />
                        <InputWithBorderBottom size="large" type="text" placeholder="Matrícula" />
                        <SelectWithDropDow  data={options} size="large"/>
                        <InputWithBorderBottom size="large" type="text" placeholder="Senha" />
                        <Button size="large" buttonType="accept" title="ENTRAR"/>
                    {/* </form> */}
                </LoginWrap>
            </LoginContrainer>
        </Container> 
        </>
    )
}


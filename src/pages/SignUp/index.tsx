import { InputWithBorderBottom } from "../../Components/InputWithBorderBottom";
import { Button } from "../../Components/Button";
import { SelectWithDropDow } from "../../Components/SelectWithDropDow";
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import {
    Container,
    LoginContrainer,
    LoginWrap,
    Title,
    ButtonContainer,
    Toast,
} from './styles'
import { useAuth } from "../../context/useAuth";
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";


export function SignUp() {
    const navigate = useNavigate();
    const { signUp } = useAuth();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [confirmSenha, setConfirmSenha] = useState('');
    const [cargo, setCargo] = useState('');
    const [senha, setSenha] = useState('');
    const options = [
        { value: "", label: 'Cargo', disabled: true, selected: true, hidden: true },
        { value: "2", label: 'Professor' },
        { value: "3", label: 'Aluno' },
        { value: "4", label: 'Externo' }
    ]

    const schema = Yup.object().shape({
        email: Yup.string()
            .email('Insira um email válido')
            .required('O email é obrigatório'),
        matricula: Yup.string(),
        senha: Yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('A senha é obrigatória'),
        confirmSenha: Yup.string().oneOf([Yup.ref('senha'), ''], 'As senhas são diferentes').required(),
        nome: Yup.string().required('O nome é obrigatório'),
        cargo: Yup.string().required('O cargo é obrigatório'),
    });

    const handleSubmit = async () => {
        const values = {
            email,
            confirmSenha,
            senha,
            nome,
            cargo,
          };

        try {
            await schema.validate(values, { abortEarly: false });
            await signUp(nome, email, senha, parseInt(cargo)).then(() =>{
                navigate('/signin')
            })
        } catch (err: unknown) {
            const errorMessages = (err as any).inner.map((e: any) => e.message);
            toast.error(`${errorMessages.join()}`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

    }

    return (
        <>
            <Container>
                <ToastContainer  style={{textAlign:'left'}} />
                <LoginContrainer>
                    <LoginWrap>
                        {/* <form onSubmit={handleSubmit}> */}
                        <Title>Cadastro</Title>
                        <InputWithBorderBottom size="large" type="text" placeholder="Nome Completo" onChange={e => setNome(e.target.value)} />
                        <InputWithBorderBottom size="large" type="text" placeholder="E-mail" onChange={e => setEmail(e.target.value)} />
                        <SelectWithDropDow data={options} size="large" onChange={e => setCargo(e.target.value)} />
                        <InputWithBorderBottom size="large" type="password" placeholder="Senha" onChange={e => setSenha(e.target.value)} />
                        <InputWithBorderBottom size="large" type="password" placeholder="Digite novamente"  onChange={e => setConfirmSenha(e.target.value)} />


                        <ButtonContainer>
                            <Button size="large" buttonType="accept" title="Cadastrar" onClick={() => handleSubmit()} />
                        </ButtonContainer>
                        {/* </form> */}
                    </LoginWrap>
                </LoginContrainer>
            </Container>
        </>
    )
}

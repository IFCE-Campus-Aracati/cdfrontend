import { InputWithBorderBottom } from "../../Components/InputWithBorderBottom";
import { Button } from "../../Components/Button";
import {
    GlobalStyle, Container, LoginContrainer, LoginWrap, Title, RecoveryPass, ButtonContainer, CreateAccount
} from './styles'
import { useAuth } from "../../context/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from 'yup';
export function SignIn() {
    const navigate = useNavigate();
    const { signIn, user } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const schema = Yup.object().shape({
        email: Yup.string()
            .email('Email ou senha inválido')
            .required('Email ou senha inválido'),
        password: Yup.string().min(6, 'Email ou senha inválido').required('Email ou senha inválido')
    });

    const handleLogin = async () => {

        const values = {
            email,
            password
        };

        try {
            await schema.validate(values, { abortEarly: false });
            await signIn(email, password);
            
        } catch (err: any) {
            const errorMessages: any = err;
            toast.error(`${errorMessages}`, {
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
            <GlobalStyle />
            <Container>
                <ToastContainer style={{ textAlign: 'left' }} />
                <LoginContrainer>
                    <LoginWrap>
                        <Title>Login</Title>

                        <InputWithBorderBottom size="large" type="text" placeholder="Email ou Matricula" onChange={e => setEmail(e.target.value)} />
                        <RecoveryPass>Esqueceu sua senha?</RecoveryPass>
                        <InputWithBorderBottom size="large" type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)} />

                        <ButtonContainer>
                            <Button size="large" buttonType="accept" title="Entrar" onClick={handleLogin} />
                        </ButtonContainer>

                        <CreateAccount onClick={() => navigate('/signup')} >Não tem conta? <span>Criar conta</span></CreateAccount>
                    </LoginWrap>
                </LoginContrainer>
            </Container>
        </>
    );
}
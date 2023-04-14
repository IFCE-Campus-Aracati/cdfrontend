import { InputWithBorderBottom } from "../../Components/InputWithBorderBottom";
import { Button } from "../../Components/Button";
import { GlobalStyle, Container, LoginContrainer, LoginWrap,  LoginTitle, 
    TextTitle, Text1, Text2, TextCenter, ForgotPassword, TextSenha} from './styles'
export function SignIn(){
    return (
        <>
        <GlobalStyle />
        <Container>
            <LoginContrainer>
                <LoginWrap>
                    <TextTitle><LoginTitle>Sing In</LoginTitle></TextTitle>
                    <InputWithBorderBottom size="large" type="text" placeholder="Email ou Matricula" />
                    <TextSenha><ForgotPassword>Esqueceu sua senha?</ForgotPassword></TextSenha>
                    <InputWithBorderBottom size="large" type="password" placeholder="Senha" />
                    <Button size="large" buttonType="accept" title="ENTRAR"/>
                    <TextCenter><Text1>Não possui Conta?</Text1>
                                <Text2>Criar Conta.</Text2></TextCenter>
                </LoginWrap>
            </LoginContrainer>
        </Container>
        </>
    );
}

{/* <GlobalStyle />
        <Container>
            <LoginContrainer>
                <LoginWrap>
                    <TextTitle><LoginTitle>Sing In</LoginTitle></TextTitle>
                    <Input type="text" placeholder="Email ou Matricula" />
                    <TextSenha><ForgotPassword>Esqueceu sua senha?</ForgotPassword></TextSenha> 
                    <Input type="password" placeholder="Senha" />
                    <LoginButton>Entrar</LoginButton>
                    <TextCenter><Text1>Não possui Conta?</Text1>
                                <Text2>Criar Conta.</Text2></TextCenter>   
                </LoginWrap>
            </LoginContrainer>
        </Container>   */}
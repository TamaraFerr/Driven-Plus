import Logo from "../../assets/logo-home.png"
import {Links, Container, Button, Form, LogoPlus, Body, Inputs} from "./Style"
import { Link } from "react-router-dom"

export default function Login(){
    return(
        <Container>
            <Body>
                <LogoPlus src={Logo} alt="Logo-plus" />

                <Form>
                    <Inputs type="email" placeholder="E-mail"/>
                    <Inputs type="password" placeholder="Senha" />
                </Form>
               
                    <Button>ENTRAR</Button>

                <Link to={`/sign-up`}>
                    <Links>Não possui uma conta? Cadastre-se!</Links>
                </Link>
            </Body>
        </Container>
    )
}
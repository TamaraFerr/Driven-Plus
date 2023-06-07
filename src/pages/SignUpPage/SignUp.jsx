import {Links, Container, Button, Form, Body, Inputs} from "./Style"
import { Link } from "react-router-dom"

export default function SignUp(){
    return(
        <Container>
            <Body>
                <Form>
                    <Inputs type="text" placeholder="Nome" />
                    <Inputs type="number" placeholder="CPF" />
                    <Inputs type="email" placeholder="E-mail"/>
                    <Inputs type="password" placeholder="Senha" />
                </Form>

                <Button>Cadastrar</Button>

                <Link to={`/`}>
                    <Links>Já Possui uma conta? Entre</Links>
                </Link>
            </Body>
        </Container>
    )
}
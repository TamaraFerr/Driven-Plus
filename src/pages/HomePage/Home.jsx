import User from "../../assets/User.svg"
import Logo from "../../assets/logo-plano-branco.png"
import { Header, Body, Container, Button, Buttons, Cancel, Title, Profile, Icon, Options } from "./Style"

export default function Home(){
    return(
        <Container>
            <Header>
                <Icon src={Logo} alt="logo-plano" />
                <Profile src={User} alt="user-profile" />
            </Header>

            <Body>
                <Title>Olá, fulano</Title>

                <Buttons>
                    <Button>Solicitar brindes</Button>
                    <Button>Materiais bônus de web</Button>
                </Buttons>

                <Options>
                    <Button>Mudar plano</Button>
                    <Cancel>Cancelar plano</Cancel>
                </Options>
            </Body>
        </Container>
    )
}
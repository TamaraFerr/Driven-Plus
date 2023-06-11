import Logo from "../../assets/logo-plano-branco.png"
import Icon from "../../assets/Vector.svg"
import Money from "../../assets/Money.svg"
import {Container, Form, Inputs, Input, Flex, Body, Icons, Top, Header, Title, Button, List, SubTitle, Plan, Description} from "./Style"

export default function Subscriptions(){
    return(
        <Container>
            <Header>
                
            </Header>

            <Body>
                <Top>
                    <img src={Logo} alt="logo" />
                    <Title>Driven Plus</Title>
                </Top>
                <Plan>
                    <Description>
                        <img src={Icon} alt="beneficios-icon" />
                        <SubTitle>Benefícios:</SubTitle>
                    </Description>
                    <List>
                        <li>Brindes exclusivos</li>
                        <li>Materiais bônus de web</li>
                    </List>
            
                    <Description>
                        <img src={Money} alt="money-icon" />
                        <SubTitle>Preço:</SubTitle>
                    </Description>
                    <p>R$ 39,99 cobrados mensalmente</p>
                </Plan>
                <Form>
                    <Inputs placeholder="Nome impresso no cartão"/>
                    <Inputs placeholder="Digitos do cartão"/>
                    <Flex>
                        <Input placeholder="Código de segurança"/>
                        <Input placeholder="Validade"/>
                    </Flex>
                </Form>

                <Button>ASSINAR</Button>
            </Body>
        </Container>
    )
}
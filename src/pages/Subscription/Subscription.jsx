import { Container, Title, Image, Price, Card, Cards } from "./Style"
import PlanoAmarelo from "../../assets/logo-plano-amarelo.png"
import PlanoBranco from "../../assets/logo-plano-branco.png"
import PlanoVerde from "../../assets/logo-plano-verde.png"

export default function Subscription(){
    return(
        <Container>
            <Title>Escolha seu Plano</Title>

            <Cards>
                <Card>
                    <Image src={PlanoBranco} alt="plano-branco" />
                    <Price>R$ 50,00</Price>
                </Card>
                <Card>
                    <Image src={PlanoAmarelo} alt="plano-amarelo" />
                    <Price>R$ 50,00</Price>
                </Card>
                <Card>
                    <Image src={PlanoVerde} alt="plano-verde" />
                    <Price>R$ 50,00</Price>
                </Card>
            </Cards>
        </Container>
    )
}
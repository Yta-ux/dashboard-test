import { HeaderProps } from "../../types/HeaderProps";
import { Container, Description, IconSettings, Title } from "./style";


export function Header(props: HeaderProps) {

    const pathImage = '../../../assets/'
    return (
        <div>
            <Container>
                <div>
                    <Title>{props.title}</Title>
                    <Description>{props.description}</Description>
                </div>
                <IconSettings src={pathImage + "settings.svg"} alt="ícone de uma engrenagem de cor preta" />
            </Container>
        </div>
    )
}
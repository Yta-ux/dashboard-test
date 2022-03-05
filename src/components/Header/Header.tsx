import { HeaderProps } from "../../types/HeaderProps";
import { Container, Description, IconSettings, Title } from "./style";
import settings from "../../assets/settings.svg";


export function Header(props: HeaderProps) {

    return (
        <div>
            <Container>
                <div>
                    <Title>{props.title}</Title>
                    <Description>{props.description}</Description>
                </div>
                <IconSettings src={settings} alt="ícone de uma engrenagem de cor preta" />
            </Container>
        </div>
    )
}
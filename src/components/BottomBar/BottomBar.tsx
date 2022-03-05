import { BottomContainer, Container, IconContainer } from "./style";

interface BottomBarProps {
    className?: string;
}

export function BottomBar(props: BottomBarProps) {

    const pathImage = '../../../assets/'

    return (
        <div className={props.className}>
            <Container>
                <BottomContainer>
                    <IconContainer>
                        <img src={pathImage + "bar-chart.svg"} alt="ícone de gráfico em barras azul" />
                    </IconContainer>
                </BottomContainer>
            </Container>
        </div>
    )
}
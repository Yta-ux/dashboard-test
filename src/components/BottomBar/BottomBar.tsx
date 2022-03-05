import { BottomContainer, Container, IconContainer } from "./style";
import bar_chart from "../../assets/bar-chart.svg";

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
                        <img src={bar_chart} alt="ícone de gráfico em barras azul" />
                    </IconContainer>
                </BottomContainer>
            </Container>
        </div>
    )
}
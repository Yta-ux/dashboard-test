import { BottomContainer, Container, IconContainer } from "./style";
import barchart from "../../assets/bar-chart.svg";

interface BottomBarProps {
    className?: string;
}

export function BottomBar(props: BottomBarProps) {

    return (
        <div className={props.className}>
            <Container>
                <BottomContainer>
                    <IconContainer>
                        <img src={barchart} alt="ícone de gráfico em barras azul" />
                    </IconContainer>
                </BottomContainer>
            </Container>
        </div>
    )
}
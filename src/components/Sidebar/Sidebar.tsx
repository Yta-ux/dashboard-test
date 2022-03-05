import { useState } from "react";
import { Container, ControllerAnimation, Menu, MenuSection, SidebarDynamic, SidebarStatic, ToggleButton, MaskSidebar } from "./style";
import menu from "../../assets/menu.svg";
import chevron from "../../assets/chevron-left.svg";
import barchart from "../../assets/bar-chart.svg";

interface SidebarProps {
    className?: string;
}

export function Sidebar(props: SidebarProps) {

    const [isActive, setIsActive] = useState(false)

    function openMenu() {
        setIsActive(!isActive)
    }

    function closeMenu() {
        setIsActive(false)
    }

    return (
        <div className={props.className}>
            <Container>
                <SidebarStatic className="sidebarStatic">
                    <Menu onClick={openMenu} className="menu" active={isActive}>
                    <img src={menu} alt="três barras pretas horizontais, empilhadas com um espaço entre elas" />
                    </Menu>
                </SidebarStatic>

                <SidebarDynamic className="sidebarDynamic" active={isActive}>
                    <ControllerAnimation active={isActive}>
                        <MenuSection>
                            <img src={barchart} alt="ícone de gráfico em barras azul" />
                            <p>Painel de Controle</p>
                        </MenuSection>
                        <ToggleButton type="button" onClick={closeMenu}>
                            <img src={chevron} alt="Flecha branca no sentido esquerdo" />
                        </ToggleButton>
                    </ControllerAnimation>
                </SidebarDynamic>
            </Container>
            <MaskSidebar active={isActive}></MaskSidebar>
        </div>
    )
}
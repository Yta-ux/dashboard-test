import { useState } from "react";
import { Container, ControllerAnimation, Menu, MenuSection, SidebarDynamic, SidebarStatic, ToggleButton, MaskSidebar } from "./style";

interface SidebarProps {
    className?: string;
}

export function Sidebar(props: SidebarProps) {

    const pathImage = '../../../src/images/'

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
                        <img src={pathImage + 'menu.svg'} alt="ícone de menu hambúrguer" />
                    </Menu>
                </SidebarStatic>

                <SidebarDynamic className="sidebarDynamic" active={isActive}>
                    <ControllerAnimation active={isActive}>
                        <MenuSection>
                            <img src={pathImage + 'bar-chart.svg'} alt="ícone de gráfico em barras azul" />
                            <p>Painel de Controle</p>
                        </MenuSection>
                        <ToggleButton type="button" onClick={closeMenu}>
                            <img src={pathImage + 'chevron-left.svg'} alt="Flecha branca no sentido esquerdo" />
                        </ToggleButton>
                    </ControllerAnimation>
                </SidebarDynamic>
            </Container>
            <MaskSidebar active={isActive}></MaskSidebar>
        </div>
    )
}
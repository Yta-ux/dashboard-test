import styled from "styled-components";

interface MenuProps {
  active: boolean;
}

export const MaskSidebar = styled.div.attrs((props: MenuProps) => ({
  active: props.active,
}))<MenuProps>`
  background-color: transparent;
  height: 100vh;
  position: relative;
  transition: width 0.6s ease-out;
  width: ${(props) => (props.active ? "286px" : "53px")};
  z-index: -1;
`;

export const Container = styled.div`
  display: flex;
  position: fixed;
`;

export const SidebarStatic = styled.div`
  align-items: flex-start;
  background: var(--menu-gradient);
  display: flex;
  min-height: 170vh;
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: 51px;
`;

export const Menu = styled.div.attrs((props: MenuProps) => ({
  active: props.active,
}))<MenuProps>`
  align-items: center;
  background-color: ${(props) =>
    props.active ? "var(--bg-card)" : "transparent"};
  border-radius: 100%;
  cursor: pointer;
  display: flex;
  height: 61px;
  justify-content: center;
  margin-top: 13.6rem;
  position: absolute;
  text-align: center;
  transition: all 0.2s;
  width: 61px;

  &:hover {
    background-color: var(--bg-card);
  }
`;

export const SidebarDynamic = styled.div.attrs((props: MenuProps) => ({
  active: props.active,
}))<MenuProps>`
  border-right: 1px solid var(--border);
  position: relative;
  transition: width 0.6s ease-out;
  width: ${(props) => (props.active ? "233px" : "0px")};
`;

export const MenuSection = styled.div`
  color: var(--blue-dark);
  display: flex;
  font-size: 1.5rem;
  gap: 0.9rem;
  line-height: 2.6rem;
  padding: 11.1rem 2rem 0 2.2rem;
`;

export const ToggleButton = styled.button`
  background-color: var(--blue-dark);
  border: none;
  border-radius: 50%;
  color: var(--bg-card);
  cursor: pointer;
  display: flex;
  height: 15px;
  position: absolute;
  right: -0.8rem;
  top: 7.8rem;
  width: 16px;
`;

export const ControllerAnimation = styled.div.attrs((props: MenuProps) => ({
  active: props.active,
}))<MenuProps>`
  display: ${(props) => (props.active ? "flex" : "none")};
`;

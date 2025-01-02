import { HeaderProps } from "../../types/HeaderProps";
import { MiniSelect } from "../Select/MiniSelect";
import { Select } from "../Select/Select";
import { ContainerLarge, IconSettings, Title, WrapperLargeIcon } from "./style";
import settings from "../../assets/settings.svg";

export function HeaderLargeIcon(props: HeaderProps) {
  return (
    <div>
      <ContainerLarge>
        <Title className="titleLarge">{props.title}</Title>
        <WrapperLargeIcon>
          <Select className="select" displayOptions={0} />
          <MiniSelect className="mini-select" />
          <IconSettings
            src={settings}
            alt="ícone de uma engrenagem de cor preta"
            className="settings"
          />
        </WrapperLargeIcon>
      </ContainerLarge>
    </div>
  );
}

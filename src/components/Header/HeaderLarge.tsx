import { HeaderProps } from "../../types/HeaderProps";
import { MiniSelect } from "../Select/MiniSelect";
import { Select } from "../Select/Select";
import { ContainerLarge, Title, WrapperLarge } from "./style";

export function HeaderLarge(props: HeaderProps) {
  return (
    <div>
      <ContainerLarge>
        <Title className="titleLarge">{props.title}</Title>
        <WrapperLarge>
          <Select className="select" displayOptions={0} />
          <MiniSelect className="mini-select" />
        </WrapperLarge>
      </ContainerLarge>
    </div>
  );
}

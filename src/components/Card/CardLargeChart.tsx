import { CardProps } from "../../types/CardProps";
import { BarChart } from "../Chart/BarChart";
import { HeaderLargeIcon } from "../Header/HeaderLargeIcon";
import { dataBar } from "../../data/dataBar";
import {
  ChartWrapper,
  ChartSize,
  ContainerLegends,
  ListLegends,
  IconLegend,
  LegendItem,
  ChartContainer,
} from "./style";

export function CardLargeChart(props: CardProps) {
  return (
    <div className={props.className}>
      <ChartContainer height={props.height}>
        <HeaderLargeIcon title={props.title} description={props.description} />

        <ChartWrapper>
          <ChartSize>
            <BarChart data={dataBar} />
          </ChartSize>
        </ChartWrapper>

        <ContainerLegends>
          <ListLegends gap="1.3rem">
            <LegendItem>
              <IconLegend color="var(--blue)" />
              <p>Inspeções Realizadas</p>
            </LegendItem>
            <LegendItem>
              <IconLegend color="var(--red-dark)" />
              <p>Planos de ação criados</p>
            </LegendItem>
            <LegendItem>
              <IconLegend color="var(--purple)" />
              <p>Média Geral</p>
            </LegendItem>
          </ListLegends>
        </ContainerLegends>
      </ChartContainer>
    </div>
  );
}

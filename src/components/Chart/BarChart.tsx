import { ResponsiveBar } from "@nivo/bar";

interface BarChartProps {
  data: {
    category: string;
    Inspeções_realizadas: number;
    Planos_de_ação_criados: number;
    Média_Geral: number;
  }[];
}

export const BarChart = ({ data }: BarChartProps) => (
  <ResponsiveBar
    data={data}
    keys={["Inspeções_realizadas", "Planos_de_ação_criados", "Média_Geral"]}
    indexBy="category"
    maxValue={900}
    innerPadding={5}
    padding={0.4}
    groupMode="grouped"
    colors={["#4b9eea", "#c00808", "#a91b79"]}
    axisBottom={null}
    axisLeft={null}
    enableGridY={false}
    enableLabel={false}
    isFocusable={true}
    role="application"
    ariaLabel="Gráfico em barras"
    barAriaLabel={function (e) {
      return e.id + ": " + e.formattedValue + " in country: " + e.indexValue;
    }}
  />
);

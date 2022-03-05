import { ResponsivePie } from "@nivo/pie";

interface PieChartProps {
    data: { id: string, label: string, value: string }[],
    type?: string
}

export const PieChart = ({data, type}: PieChartProps) => (
    <ResponsivePie
        data={data}
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        colors={['#7fc008', '#db8c28', '#eb5757']}
        innerRadius={0.8}
        activeOuterRadiusOffset={8}
        enableArcLabels={false}
        enableArcLinkLabels={false}
    />
)
import { CardProps } from '../../types/CardProps'
import { PieChart } from '../Chart/PieChart'
import { Header } from '../Header/Header'
import { dataPie } from '../../data/data'
import { Container, ListLegends, IconLegend, ChartWrapper, ChartSize, InfosContainer, Table, LegendTable, Details, LegendItem } from './style'

interface OptionsLegendProps {
    item: {color: string, label: string,}
}

export function Card(props: CardProps) {

    const optionsLegends = [
        [
            {color: "var(--green)", label: "Realizada"},
            {color: "var(--yellow)", label: "Em aberto"},
            {color: "var(--red)", label: "Não realizada"}
        ],
        [
            {color: "var(--green)", label: "Criada"},
            {color: "var(--yellow)", label: "Finalizada"},
            {color: "var(--red)", label: "Em aberto"}
        ]
    ]

    const displayOptions = Number(props.displayLegend)

    return (
        <div className={props.className}>
            <Container height={props.height}>
                <Header title={props.title} description={props.description} />

                <ChartWrapper>
                    <ChartSize>
                        <PieChart data={dataPie} type={props.type}/>
                    </ChartSize>
                </ChartWrapper>

                <InfosContainer show={props.infos}>
                    <ListLegends column={true} gap=".7rem">
                        {
                            !isNaN(displayOptions) ?
                            optionsLegends[displayOptions].map((item , index) => {
                                return (
                                    <LegendItem key={index}>
                                        <IconLegend color={item.color} />
                                        <p>{item.label}</p>
                                    </LegendItem>
                                )
                            })
                            : ""
                        }
                    </ListLegends>
                    <Table>
                        <LegendTable>Média de tempo</LegendTable>
                        <tbody>
                            <tr>
                                <td>Hoje</td>
                                <td>10 min</td>
                            </tr>
                            <tr>
                                <td>últimos 7 dias</td>
                                <td>10 min</td>
                            </tr>
                            <tr>
                                <td>Últimos 30 dias</td>
                                <td>10 min</td>
                            </tr>
                        </tbody>
                    </Table>
                </InfosContainer>

                <Details href="#" show={props.details}>
                    Visualizar detalhes
                </Details>
            </Container>
        </div>
    )
}
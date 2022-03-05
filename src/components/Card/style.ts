import styled from "styled-components";

interface IconLegendProps {
    color: string;
}

interface ContainerProps {
    width?: string;
    height?: string;
}

interface ListLegendsProps {
    column?: boolean;
    gap?: string;
}

interface CardInfosDetailsProps {
    show: boolean;
}

interface PlaneStatusProps{
    color: string;
}

// Card Geral
export const Container = styled.div.attrs((props: ContainerProps) => ({
    width: props.width,
    height: props.height
})) <ContainerProps>`
    background-color: var(--bg-card);
    border: .5px solid var(--border-dark);
    border-radius: 5px;
    box-shadow: 0px 4px 10px var(--shadow);
    padding: 1.1rem .7rem 2.9rem 1.4rem;
    width: ${props => props.width};
    height: ${props => props.height};
`

export const InspectContainer = styled(Container)`
    padding: 1.5rem 1.1rem 2.7rem 2.3rem;
    height: 328px;
    overflow-x: hidden;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-track {
        background: var(--bg-primary);
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--text);
        border-radius: 20px;
        border: 4px solid var(--bg-primary);
    }
`

export const PlanesContainer = styled(Container)`
    padding: .7rem 1.4rem 3.8rem 1.1rem;
    height: 740px;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-track {
        background: var(--bg-primary);
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--text);
        border-radius: 20px;
        border: 4px solid var(--bg-primary);
    }
`
export const ChartContainer = styled(Container)`
    padding: 1rem 1.6rem 1.2rem;
`

export const ListLegends = styled.ul.attrs((props: ListLegendsProps) => ({
    column: props.column,
    gap: props.gap
})) <ListLegendsProps>`
    /* align-items: center; */
    display: flex;
    flex-direction: ${props => props.column ? 'column' : 'row'};
    gap: ${props => props.gap};
    justify-content: center;
    list-style: none;
    flex-wrap: wrap;
`

export const LegendItem = styled.li`
    color: var(--legend);
    cursor: pointer;
    align-items: center;
    display: flex;
    font-size: .9rem;
    font-weight: 300;
    gap: .5rem;
    line-height: 1.7rem;
    transition: all .2s;

    &:hover{
        color: var(--text)
    }
`

export const IconLegend = styled.div.attrs((props: IconLegendProps) => ({
    color: props.color
})) <IconLegendProps>`
    border: 2px solid ${props => props.color};
    border-radius: 50%;
    height: 11px;
    width: 11px;
`

// Card
export const InfosContainer = styled.div.attrs((props: CardInfosDetailsProps) => ({
    show: props.show
})) <CardInfosDetailsProps>`
    align-items: center;
    display: ${props => props.show ? 'flex' : 'none'};
    justify-content: space-between;
`

export const Details = styled.a.attrs((props: CardInfosDetailsProps) => ({
    show: props.show
})) <CardInfosDetailsProps>`
    color: var(--text);
    display: ${props => props.show ? 'inline-block' : 'none'};
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 2.1rem;
    margin-top: .6rem;
    text-decoration: none;
`

export const Table = styled.table`
    font-size: .9rem;
    font-weight: 300;
    line-height: 1.7rem;
`

export const LegendTable = styled.p`
    color: var(--description);
    font-size: 1rem;
    line-height: 1.5rem;
`

// Card Large Chart
export const ContainerLegends = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: 2rem;
`

export const ChartWrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 1.5rem 0 .9rem;
    `

export const ChartSize = styled.div`
    height: 180px;
    width: 100%;
`

//  Card Inspect
export const TableInspect = styled.table`
    line-height: 2.1rem;
    margin: 0 0 .2rem 1rem;
    text-align: center;
    width: 100%;
`

export const TableHead = styled.th`
    &{
        font-size: .6rem;
        font-weight: 700;
        text-transform: uppercase;
    }

    @media (min-width: 0){
        &:first-child{
            text-align: left;
            width: 30%;
        }

        &:not(:first-child){
            width: 15%;
        }
    }

    @media (min-width: 520px){
        &:first-child{
            width: 40%;
        }

        &:not(:first-child){
            width: 15%;
        }
    }

    @media (min-width: 920px){
        &:first-child{
            width: 70%;
        }

        &:not(:first-child){
            width: 10%;
        }
    }
`

export const DataInspect = styled.td`

    @media (min-width: 0){
        &:first-child{
            font-size: 1rem;
            font-weight: 500;
            text-align: left;
        }
    }

    @media (min-width: 520px){
        &:first-child{
            font-size: 1.2rem;
        }
    }
`

// Card Planes
export const ContainerPlanes = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 1.6rem;
`

export const PlanesList = styled.ul`
    margin-top: 4rem;
`

export const PlaneItem = styled.li`
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 1.2rem .6rem;

    &:not(:last-child){
        border-bottom: 1px solid var(--border);
    }
`

export const PlaneName = styled.h3`
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: .9rem;
`

export const PlaneResponse = styled.p`
    color: var(--description);
    font-size: 1.2rem;
`

export const PlaneStatus = styled.div.attrs((props: PlaneStatusProps) => {
    color: props.color;
})<PlaneStatusProps>`
    align-items: center;
    border: 1px solid ${props => props.color};
    border-radius: 100px;
    color: ${props => props.color};
    display: flex;
    font-size: .6rem;
    font-weight: 700;
    height: 13px;
    justify-content: center;
    margin-bottom: .4rem;
    text-transform: uppercase;
    width: 63px;

    span{
        display: inline-block;
        margin-top: .2rem;
    }
`

export const PlaneDate = styled.p`
    color: var(--description);
    font-size: 1.2rem;
    position: relative;
    right: 20px;
`
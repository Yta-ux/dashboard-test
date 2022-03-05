import { useFetch } from "../../hooks/useFetch";
import { CardProps } from "../../types/CardProps";
import { DataPlanesProps } from "../../types/DataProps";
import { Header } from "../Header/Header";
import { ContainerLarge } from "../Header/style";
import { SearchBar } from "../SearchBar/SearchBar";
import { Select } from "../Select/Select";
import { ContainerPlanes, PlaneName, PlaneResponse, PlaneStatus, PlaneDate, PlanesList, PlaneItem, PlanesContainer } from "./style";


export function CardLargePlanes(props: CardProps) {
    const { data } = useFetch<DataPlanesProps[]>('http://localhost:3333/planes');

    return (
        <div className={props.className}>
            <PlanesContainer height={props.height}>
                <Header title={props.title} description={props.description} />
                <ContainerPlanes>
                    <SearchBar />
                    <Select displayOptions={1} />
                </ContainerPlanes>
                <PlanesList>
                    {
                        data?.map((item) => {
                            return (
                                <PlaneItem>
                                    <div>
                                        <PlaneName>{item.name}</PlaneName>
                                        <PlaneResponse>{item.responsible}</PlaneResponse>
                                    </div>
                                    <div>
                                        <PlaneStatus>
                                            <span>{item.status}</span>
                                        </PlaneStatus>
                                        <PlaneDate>{item.date}</PlaneDate>
                                    </div>
                                </PlaneItem>
                            )
                        })
                    }
                </PlanesList>
            </PlanesContainer>
        </div>
    )
}
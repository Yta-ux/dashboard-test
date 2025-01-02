import { DataInspectProps } from "../../types/DataProps";
import { useFetch } from "../../hooks/useFetch";
import { CardProps } from "../../types/CardProps";
import { HeaderLarge } from "../Header/HeaderLarge";
import { SearchBar } from "../SearchBar/SearchBar";
import {
  TableInspect,
  TableHead,
  DataInspect,
  InspectContainer,
  TableScroll,
} from "./style";

export function CardLargeInspect(props: CardProps) {
  const { data } = useFetch<DataInspectProps[]>(
    "http://localhost:3333/inspects",
  );

  return (
    <div className={props.className}>
      <InspectContainer height={props.height}>
        <HeaderLarge title={props.title} description={props.description} />
        <SearchBar />
        <TableScroll>
          <TableInspect>
            <thead>
              <TableHead>Nome</TableHead>
              <TableHead>Planejado</TableHead>
              <TableHead>Realizado</TableHead>
              <TableHead>Últimas atualizações</TableHead>
            </thead>
            <tbody>
              {data?.map((item) => {
                return (
                  <tr>
                    <DataInspect>{item.name}</DataInspect>

                    <DataInspect>{item.planned || "-"}</DataInspect>
                    <DataInspect>{item.completed || "-"}</DataInspect>
                    <DataInspect>{item.date}</DataInspect>
                  </tr>
                );
              })}
            </tbody>
          </TableInspect>
        </TableScroll>
      </InspectContainer>
    </div>
  );
}

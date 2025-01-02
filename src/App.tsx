import { Container, Wrapper } from "./styles/style";
import { Card } from "./components/Card/Card";
import { CardLargeChart } from "./components/Card/CardLargeChart";
import { CardLargeInspect } from "./components/Card/CardLargeInspect";
import { CardLargePlanes } from "./components/Card/CardLargePlanes";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { BottomBar } from "./components/BottomBar/BottomBar";

export function App() {
  return (
    <div>
      <Container>
        <Sidebar className="sidebar" />
        <BottomBar className="bottom-bar" />

        <Wrapper>
          <h1 className="nameSection">Painel de Controle</h1>
          <div className="cards">
            <CardLargeChart className="card" title="Histórico de eventos" />
            <Card
              className="card"
              title="Plano de ação"
              description="visão geral"
              infos={false}
              details={false}
              height="100%"
            />
            <Card
              className="card"
              title="Inspeções"
              description="status do dia"
              infos={true}
              height="100%"
              type="inspect"
              displayLegend="0"
            />
            <Card
              className="card"
              title="Plano de ação"
              description="status do dia"
              infos={true}
              details={true}
              type="plane"
              displayLegend="1"
            />
            <CardLargePlanes
              className="card"
              title="Planos de ação"
              description="atualizações"
            />
            <CardLargeInspect className="card" title="Inspeções agendadas" />
          </div>
        </Wrapper>
      </Container>
    </div>
  );
}

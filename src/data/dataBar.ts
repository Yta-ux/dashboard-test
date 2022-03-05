import server from "../../server.json"

const created = server.planes.length
const realized = server.inspects.filter(item => item.planned === item.completed && item.planned != "").length
const average = (created + realized) / 2

export const dataBar = [
    {
        "category": "Janeiro",
        "Inspeções_realizadas": realized * 20,
        "Planos_de_ação_criados": created * 20,
        "Média_Geral": average * 20,
    },
    {
        "category": "Fevereiro",
        "Inspeções_realizadas": realized * 40,
        "Planos_de_ação_criados": created * 40,
        "Média_Geral": average * 40,
    },
    {
        "category": "Março",
        "Inspeções_realizadas": realized * 60,
        "Planos_de_ação_criados": created * 60,
        "Média_Geral": average * 60,
    },
    {
        "category": "Abril",
        "Inspeções_realizadas": realized * 80,
        "Planos_de_ação_criados": created * 80,
        "Média_Geral": average * 80,
    },
    {
        "category": "Maio",
        "Inspeções_realizadas": realized * 100,
        "Planos_de_ação_criados": created * 100,
        "Média_Geral": average * 100,
    },
    {
        "category": "Junho",
        "Inspeções_realizadas": realized * 10,
        "Planos_de_ação_criados": created * 10,
        "Média_Geral": average * 10,
    },
    {
        "category": "Julho",
        "Inspeções_realizadas": realized * 30,
        "Planos_de_ação_criados": created * 30,
        "Média_Geral": average * 30,
    },
    {
        "category": "Agosto",
        "Inspeções_realizadas": realized * 50,
        "Planos_de_ação_criados": created * 50,
        "Média_Geral": average * 50,
    },
    {
        "category": "Setembro",
        "Inspeções_realizadas": realized * 70,
        "Planos_de_ação_criados": created * 70,
        "Média_Geral": average * 70,
    },
    {
        "category": "Outubro",
        "Inspeções_realizadas": realized * 90,
        "Planos_de_ação_criados": created * 90,
        "Média_Geral": average * 90,
    },
]
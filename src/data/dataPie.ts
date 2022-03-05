import server from "../../server.json"

const completed = server.inspects.filter(item => item.planned === item.completed && item.planned != "").length
const opened = server.inspects.filter(item => Number(item.completed) < Number(item.planned)).length
const notCompleted = server.inspects.filter(item => item.planned == "" || Number(item.planned) === 0).length
const total = server.inspects.length

const averageCompleted = (100 * completed) / total;
const averageOpened = (100 * opened) / total;
const averageNotCompleted = (100 * notCompleted) / total;

console.log(opened)

export const dataPieInspect = [
    {
        id: 'Realizadas',
        label: 'Realizadas',
        value: averageCompleted.toFixed(1),
    },
    {
        id: 'Em aberto',
        label: 'Em aberto',
        value: averageOpened.toFixed(1),
    },
    {
        id: 'Não Realizadas',
        label: 'Não_realizadas',
        value: averageNotCompleted.toFixed(1),
    }
]

const created = server.planes.length
const finalized = server.planes.filter(item => item.status === "Realizado").length
const opening = server.planes.filter(item => item.status === "Pendente").length

const averageFinalized = (100 * finalized) / created;
const averageOpening = (100 * opening) / created;
const averageCreated = (created - (finalized + opening)) * 10;

export const dataPiePlanes = [
    {
        id: 'Criadas',
        label: 'Criadas',
        value: averageCreated.toFixed(1),
    },
    {
        id: 'Finalizadas',
        label: 'Finalizadas',
        value: averageFinalized.toFixed(1),
    },
    {
        id: 'Em aberto',
        label: 'Em aberto',
        value: averageOpening.toFixed(1),
    }
]
import { useFetch } from "../hooks/useFetch"
import { DataInspectProps, DataPlanesProps } from "../types/DataProps"

export function formatInspects(){
    const {data} = useFetch<DataInspectProps[]>('http://localhost:3333/inspects')

    const valuesInspects = new Array()

    let complete = 0 
    let open = 0 
    let notComplete = 0 
    
    data?.map(item => {
        valuesInspects.push({
            planned: item.planned,
            completed: item.completed,
        })
    })

    valuesInspects.map(item => {
        if(item.planned  === item.completed && item.planned != false){
            complete+=1
        }
        else if(item.planned < item.completed){
            open+=1
        }
        else{
            notComplete+=1
        }

    })
    
    const averageComplete = ((100 * complete) / valuesInspects.length)
    const averageOpen = ((100 * open) / valuesInspects.length)
    const averageNotComplete = ((100 * notComplete) / valuesInspects.length)

    const dataInspect = {
        averageComplete,
        averageOpen,
        averageNotComplete,
        conducted: complete,
    }

    return dataInspect
}

export function formatPlanes(){
    const {data} = useFetch<DataPlanesProps[]>('http://localhost:3333/planes')

    const valuesPlanes = new Array()
    
    data?.map(item => {
        valuesPlanes.push({
            status: item.status
        })
    })

    let created = valuesPlanes.length
    let completed = 0 
    let open = 0 

    valuesPlanes.map(item => {
        if(item.status === "Realizado"){
            completed+=1
        }
        else if(item.status === "Pendente"){
            open+=1
        }

    })
    
    const averageOpen = ((100 * open) / created)
    const averageCompleted = ((100 * completed) / created)
    const averageCreated = (100 - (averageOpen + averageCompleted))


    const dataPlanes = {
        averageCompleted,
        averageOpen,
        averageCreated,
        creates: created,
    }

    return dataPlanes
}
import { useState } from "react";
import { SelectProps } from "../../types/SelectProps";
import { ListOptions } from "./ListOptions";
import { Container, MiniOptionsContainer, MiniSelected } from "./style";

interface Item {
    id: string,
    value: string
}

export function MiniSelect(props: SelectProps) {
    const pathImage = '../../../assets/'
    const [isOptions, setIsOptions] = useState(false)
    const [titleSelect, setTitleSelect] = useState()

    const options: Item[] = [
        { id: "day", value: "Diário"}, 
        { id: "week", value: "Semanal"},
        { id: "month", value: "Mensal"},
        { id: "year", value: "Anual"}
    ]

    function handleClickOption(event: any) {
        const value = event.target.children[1].innerHTML

        setTitleSelect(value)
        setIsOptions(false)
    }

    function handleClick() {
        setIsOptions(!isOptions)
    }

    return (
        <div className={props.className}>
            <Container>
                <MiniOptionsContainer active={isOptions}>
                    {
                        options.map((item, index) => (
                            <ListOptions key={index} item={item} action={handleClickOption}/>
                        ))
                    }
                </MiniOptionsContainer>

                <MiniSelected active={isOptions} onClick={handleClick} width="34px">
                    <img src={pathImage + "chevron-down.svg"} />
                </MiniSelected>
            </Container>
        </div>
    )
}
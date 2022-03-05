import { useState } from "react";
import { SelectProps } from "../../types/SelectProps";
import { ListOptions } from "./ListOptions";
import { Container, OptionsContainer, Selected } from "./style";
import chevron from "../../assets/chevron-down.svg";


export function Select(props: SelectProps) {
    const [isOptions, setIsOptions] = useState(false)
    const [titleSelect, setTitleSelect] = useState("Selecione uma opção")

    const listOptions = [
        [
            { id: "day", value: "Diário" },
            { id: "week", value: "Semanal" },
            { id: "month", value: "Mensal" },
            { id: "year", value: "Anual" }
        ],
        [
            { id: "all", value: "Todos" },
            { id: "resolve", value: "Resolvidos" },
            { id: "pending", value: "Pendentes" },
            { id: "not started", value: "Não iniciados" }
        ]
    ]

    const selectDisplay = Number(props.displayOptions)

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
                <OptionsContainer active={isOptions}>
                    {
                        listOptions[selectDisplay].map((item, index) => (
                            <ListOptions key={index} item={item} action={handleClickOption} />
                        ))
                    }
                </OptionsContainer>

                <Selected active={isOptions} onClick={handleClick} width="244px">
                    <p>{titleSelect}</p>
                    <img src={chevron} alt="seta para baixo" />
                </Selected>
            </Container>
        </div>
    )
}
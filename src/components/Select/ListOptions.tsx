import { Option, InputOption, LabelOption } from "./style";

interface ListOptionsProps {
    item: {id: string, value: string},
    action?: (event: any) => void
}

export function ListOptions({item, action}: ListOptionsProps) {
    return (
        <div>
            <Option className="option" onClick={action}>
                <InputOption type="radio" className="option-radio" id={item.id} />
                <LabelOption htmlFor={item.id}>{item.value}</LabelOption>
            </Option>
        </div>
    )
}
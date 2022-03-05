import styled from 'styled-components';

interface OptionsProps {
    active: boolean;
    width?: string;
}

export const Container = styled.div`
    border-radius: 100%;
    color: var(--text);
    display: flex;
    flex-direction: column;
    font-size: 1.4rem;
    font-weight: 600;
    gap: 1rem;
    position: relative;
    width: 100%;
`

export const OptionsContainer = styled.div.attrs((props: OptionsProps) => ({
    active: props.active
})) <OptionsProps>`

    background-color: var(--bg-select);
    border-radius: 10px;
    max-height: ${props => props.active ? '200px' : '0'};
    opacity: ${props => props.active ? '1' : '0'};
    overflow: ${props => props.active ? 'visible' : 'hidden'};
    transition: all .4s;
    position: absolute;
    top: 45px;
    width: 100%;
    z-index: 1;
`

export const MiniOptionsContainer = styled(OptionsContainer)`
    min-width: 144px;
    right: -20px;
`

export const Option = styled.div`
    cursor: pointer;
    padding: .8rem 1.7rem;
    transition: all .2s;

    &:hover{
        background-color: var(--date);
        border-radius: 10px;
    }
`

export const InputOption = styled.input`
    display: none;
`

export const LabelOption = styled.label`
    cursor: inherit;
`

export const Selected = styled.div.attrs((props: OptionsProps) => ({
    active: props.active,
    width: props.width
})) <OptionsProps>`
    align-items: center;
    background-color: var(--bg-select);
    border-radius: 100px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    padding: .8rem 1.7rem;
    min-width: ${props => props.width};
    
    & img{
        transform: ${props => props.active ? 'rotateX(180deg)' : 'rotateX(0deg)'};
        transition: all .4s;
    }
`

export const MiniSelected = styled(Selected)`
    background: transparent;
`
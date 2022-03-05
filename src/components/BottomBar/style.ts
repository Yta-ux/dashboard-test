import styled from "styled-components";

export const Container = styled.div`
      align-items: center;
      display: flex;
      justify-content: center;
`

export const BottomContainer = styled.div`
      align-items: center;
      background: var(--menu-gradient);
      border-radius: 100px;
      bottom: 10px;
      display: flex;
      height: 50px;
      justify-content: center;
      position: fixed;
      width: 50%;
      z-index: 1;
`

export const IconContainer = styled.div`
    align-items: center;
    background-color: var(--bg-card);
    border-radius: 100%;
    cursor: pointer;
    display: flex;
    height: 40px;
    justify-content: center;
    transition: all .2s;
    width: 40px;

    img{
        height: 20px;
        width: 20px;
    }

    &:hover{
        transform: scale(1.1);
    }
`
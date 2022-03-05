import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    :root{
        --bg-primary: #fafafa;
        --bg-card: #ffffff;
        --bg-select: #c4c4c4;
        --menu-gradient: linear-gradient(180deg, #0DB2D6 8.12%, #4FDA91 71.62%);
        --text: #333333;
        --placeholder: #999999;
        --description: #b0b0b0;
        --legend: #161616;
        --date: #bdbdbd;
        --border: #ebebeb;
        --border-dark: #e4e4e4;
        --green: #7fc008;
        --yellow: #db8c28;
        --red-dark: #c00808;
        --red: #eb5757;
        --blue-dark: #0794b2;
        --blue: #4b9eea;
        --purple: #a91b79;
        --shadow: rgba(0,0,0,0.05);
    }

    html{
        font-size: 62.5%;
    }

    body{
        background-color: var(--bg-primary);

        &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-track {
        background: var(--bg-primary);
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--text);
        border-radius: 20px;
        border: 2px solid var(--bg-primary);
    }
    }
`
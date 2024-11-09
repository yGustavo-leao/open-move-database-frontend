import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto Condensed", sans-serif;
        font-optical-sizing: auto;
        font-style: normal;
    }

    html {
        height: 100%;
    }

    body {
        min-height: 100%;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        background-color: ${({ theme }) => theme.colors.dark_gray};
    }

    button, input {
        border: none;
    }

    button {
        cursor: pointer;
    }

    #root {
        display: flex;
        flex-grow: 1;
    }
`
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin:0;
        padding: 0;
        font-family: 'Kanit', sans-serif;
        background: ${((props) => props.theme.purple)};
    }

`
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

    *{
        margin:0;
        padding: 0;
        font-family: "Open Sans", sans-serif;
        background: ${((props) => props.theme.colors.purple)};
    }
`
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
body{
  background: #1C1D21;
    font-family: 'Playfair Display', serif;
font-family: 'Roboto', sans-serif;
    overflow-x:hidden;
    color:#FFFFFF;
    transition:0.3s ease-in-out;
}

`;
export default GlobalStyle;

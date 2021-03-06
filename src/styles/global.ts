import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    margin:0;
    padding: 0;
    box-sizing: border-box;
}

body {
   padding: ${(props) => props.theme.metrics.page_padding}px;
   background: ${(props) => props.theme.colors.white};
   color: ${(props) => props.theme.colors.grey_darkest};
   font-family: 'Montserrat', sans-serif;
}

`;

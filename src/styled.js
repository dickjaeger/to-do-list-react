import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
    box-sizing:border-box;   
    };

    *, ::before, ::after {
    box-sizing: inherit;
    };

    body {
    font-family: 'Lato', sans-serif;
    background-color: #eee;
    };
`;

export default GlobalStyle;
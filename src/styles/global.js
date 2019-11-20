import { createGlobalStyle } from 'styled-components';

import 'rc-slider/assets/index.css';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap');


    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root, .App {
     text-rendering: optimizeLegibility !important;
     -webkit-font-somoothing: antialiased !important;
     background: #181818;
     font-family: 'Montserrat', sans-serif;
     color :#fff;
     height: 100%;
    }

`;

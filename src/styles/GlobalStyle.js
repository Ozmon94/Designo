import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
          *{
            margin:0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Jost', sans-serif;
          }
          h1 {
            font-weight: 500;
            font-size: 48px;
            line-height: 48px;
          }
          h2{
            font-weight: 500;
            font-size: 40px;
            line-height: 48px;
            letter-spacing: 2px;
          }
          h3{
            font-weight: 500;
            font-size: 20px;
            line-height: 26px;
            letter-spacing: 5px;
          }
          p{
            font-weight: 400;
            font-size: 16px;
            line-height: 26px;
            
          }
    `;

export default GlobalStyle;

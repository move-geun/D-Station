import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'MICEGothic Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-01@1.0/MICEGothic Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}
body{
    box-sizing: border-box;
    margin: 0;
    /* padding-top:73px; */
    background-color: black;
    font-family: 'MICEGothic Bold';
    color: white;
    height: 100%;
      ::-webkit-scrollbar {
    display: none;
  }
    /* overflow-y: hidden; */
}
a{
    text-decoration: none;
    color: white;
}
ul{
    padding: 0;
    margin: 0;
}
li{
    list-style: none;
}
input, button{
    border:none;
    background-color: white;
    white-space: nowrap;
}
input:focus,
input:active,
button:focus,
button:active {
  outline: none;
  box-shadow: none;
}
div {
    white-space: nowrap;
}
`;

export default GlobalStyle;

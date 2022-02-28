import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  font-family: 'Nunito', sans-serif;
}
a {
  text-decoration:none;
}
`;

export default Global;
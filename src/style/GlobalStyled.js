import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainColors = {
  blackColor: "#1d1d1d",
  pointColor: "#f97b22",
};

export const GlobalStyled = createGlobalStyle`
${reset}

* {
    box-sizing: border-box;
}

body {
  background-color: ${mainColors.blackColor};
}

ul, li {
  list-style: none;
}

a {
    text-decoration: none;
    color: "white";
}
`;

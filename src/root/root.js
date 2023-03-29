import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { client } from "../contentful";
import Router from "../router/Router";
import { GlobalStyle } from "../styledComponents/GlobalStyle";
import { theme } from "../styledComponents/theme";

const Root = () => {
  useEffect(() => {
    client
      .getEntries({ content_type: "product" })
      .then((entry) => console.log(entry, "e"))
      .catch((err) => console.log(err, "err"));
  }, []);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </div>
  );
};

export default Root;

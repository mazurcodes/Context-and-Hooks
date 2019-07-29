import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from '../utils/theme';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${({theme}) => theme.colors.bg};
  }
`;

const AppWrapper = styled.div`
  background: ${({theme}) => theme.colors.appBg};
  margin: 20px auto;
  width: 90%;
  max-width: 700px;
  color: ${({theme}) => theme.colors.text};
`;

const Layout = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <>
      <GlobalStyle />
      <AppWrapper>
        {props.children}
      </AppWrapper>
    </>
    </ThemeProvider>
  )
}

export default Layout

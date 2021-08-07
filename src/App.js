import React from "react";
import { GlobalStyles } from "./componets/styles/GlobalStyles";
import Header from "./componets/Header";
import Main from "./componets/Main";
import Footer from "./componets/Footer";
import Hero from "./componets/Hero";
import {ThemeProvider} from 'styled-components'
import {myTheme} from './componets/styles/Theme'

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyles />

      <Header></Header>

      <Main>
        <Hero />
      </Main>

      <Footer></Footer>
    </ThemeProvider>
  );
}

export default App;

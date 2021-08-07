import React, { useState } from "react";
import { GlobalStyles } from "./componets/styles/GlobalStyles";
import Header from "./componets/Header";
import Main from "./componets/Main";
import Footer from "./componets/Footer";
import Hero from "./componets/Hero";
import Profile from './componets/Profile'
import {ThemeProvider} from 'styled-components'
import {myTheme} from './componets/styles/Theme'

import Sidebar from './componets/Sidebar'

function App() {

  const [sidebarOpen, setSidebarOpen] = useState(false)

  function handleSidebarOpen(){
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyles />

      <Header handleSidebarOpen={handleSidebarOpen} sidebarOpen={sidebarOpen}></Header>
      <Sidebar open={sidebarOpen} />

      <Main>
        <Hero />
        <Profile />
      </Main>

      <Footer />
    </ThemeProvider>
  );
}

export default App;

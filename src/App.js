import React, { useState } from "react";
import { GlobalStyles } from "./componets/styles/GlobalStyles";
import Header from "./componets/Header";
import Main from "./componets/Main";
import FormContact from './pages/FormContact'
import Footer from "./componets/Footer";
import Hero from "./componets/Hero";
import Profile from './componets/Profile'
import {ThemeProvider} from 'styled-components'
import {myTheme} from './componets/styles/Theme'
import Sidebar from './componets/Sidebar'
import { BrowserRouter, Route, Switch } from "react-router-dom";

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

    <BrowserRouter>
    <Switch>
      <Route exact path="/">
      <Main>
        <Hero />
        <Profile />
      </Main>
      </Route>
      <Route path="/contact">
        <FormContact />
      </Route>
    </Switch>
    </BrowserRouter>

      <Footer />
    </ThemeProvider>
  );
}

export default App;

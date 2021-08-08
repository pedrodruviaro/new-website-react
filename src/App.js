import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { myTheme } from "./componets/styles/Theme";
import { GlobalStyles } from "./componets/styles/GlobalStyles";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./componets/Header";
import Sidebar from "./componets/Sidebar";
import Main from "./componets/Main";
import FormContact from "./pages/FormContact";
import Footer from "./componets/Footer";

function App() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    function handleSidebarOpen() {
        setSidebarOpen(!sidebarOpen);
    }

    return (
        <ThemeProvider theme={myTheme}>
            <GlobalStyles />
            <BrowserRouter>
                <Header
                    handleSidebarOpen={handleSidebarOpen}
                    sidebarOpen={sidebarOpen}
                ></Header>
                <Sidebar open={sidebarOpen} />

                <Switch>
                    <Route exact path="/">
                        <Main />
                    </Route>
                    <Route path="/contact">
                        <FormContact />
                    </Route>
                </Switch>

                <Footer />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;

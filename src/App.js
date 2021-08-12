import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { myTheme } from "./componets/styles/Theme";
import { GlobalStyles } from "./componets/styles/GlobalStyles";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./componets/Header";
import Sidebar from "./componets/Sidebar";
import Main from "./componets/Main";
import FormContact from "./pages/FormContact";
import Curriculum from './pages/Curriculum'
import Articles from './pages/Articles'
import ConfirmSubmit from './pages/ConfirmSubmit'
import Page404 from './pages/Page404'
import Footer from "./componets/Footer";

import ScrollToTop from './componets/ScrollToTop'

function App() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    function handleSidebarOpen() {
        setSidebarOpen(!sidebarOpen);
    }

    return (
        <ThemeProvider theme={myTheme}>
            <GlobalStyles />
            <BrowserRouter>

            {/* scroll to the top of the page on every transition */}
            <ScrollToTop />
                <Header
                    handleSidebarOpen={handleSidebarOpen}
                    sidebarOpen={sidebarOpen}
                ></Header>
                <Sidebar open={sidebarOpen} handleSidebarOpen={handleSidebarOpen} />

                <Switch>
                    <Route exact path="/">
                        <Main />
                    </Route>
                    <Route path="/curriculum">
                        <Curriculum />
                    </Route>
                    <Route path="/articles">
                        <Articles />
                    </Route>

                    <Route path="/contact">
                        <FormContact />
                    </Route>
                    <Route path="/confirm-submit">
                        <ConfirmSubmit />
                    </Route>

                    <Route path="*">
                        <Page404 />
                    </Route>
                </Switch>

                <Footer />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;

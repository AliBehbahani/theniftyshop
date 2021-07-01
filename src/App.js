import "./App.css";

import HomePage from "./home";
import NavBar from "./components/NavBar";

import NftList from "./components/NftList";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles";
import { useState } from "react";
import NftDetail from "./components/NftDetail";

import { Route, Switch } from "react-router";

import { Helmet } from "react-helmet";
const theme = {
  light: {
    backgroundColor: "white",
    mainColor: "black",
    red: "red",
  },
  dark: {
    backgroundColor: "black",
    mainColor: "white",
    red: "red",
  },
};
function App() {
  const [currentTheme, setCurrentTheme] = useState("dark");

  const toggleCurrentTheme = () => {
    if (currentTheme === "dark") setCurrentTheme("light");
    else setCurrentTheme("dark");
  };
  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar
        toggleCurrentTheme={toggleCurrentTheme}
        currentTheme={currentTheme}
      />
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Switch>
        <Route path="/products/:nftSlug">
          <NftDetail />
        </Route>
        <Route path="/products">
          <NftList />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;

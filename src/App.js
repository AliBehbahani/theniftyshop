//library imports
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";
import { observer } from "mobx-react";
//components
import NavBar from "./components/NavBar";
import Routes from "./components/Routes";
//stores
import galleryStore from "./stores/galleryStore";
import nftStore from "./stores/nftStore";
//styles
import { GlobalStyle } from "./styles";

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
      {galleryStore.loading || nftStore.loading ? (
        <h1>plz wait ....</h1>
      ) : (
        <Routes />
      )}
    </ThemeProvider>
  );
}

export default observer(App);

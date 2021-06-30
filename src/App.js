import "./App.css";

import HomePage from "./home";
import NavBar from "./components/NavBar";

import NftList from "./components/NftList";
import { ThemeProvider } from "styled-components";
import { ListHeader, GlobalStyle, ToggleButton, NavProducts } from "./styles";
import { useState } from "react";
import NftDetail from "./components/NftDetail";
import nftData from "./data";

import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
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
  const [nft, setNft] = useState(nftData[null]);
  const [_nfts, setNfts] = useState(nftData);
  const nftDelete = (nftId) => {
    const undeletedNfts = _nfts.filter((nft) => nft.id !== nftId);
    setNfts(undeletedNfts);
  };

  const toggleCurrentTheme = () => {
    if (currentTheme === "dark") setCurrentTheme("light");
    else setCurrentTheme("dark");
  };
  const NftView = () => {
    if (nft)
      return (
        <NftDetail nft={nft} setNft={setNft} nftDelete={nftDelete}></NftDetail>
      );
    else
      return <NftList setNft={setNft} nftDelete={nftDelete} nftData={_nfts} />;
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
          <NftDetail nftData={_nfts} setNft={setNft} nftDelete={nftDelete} />
        </Route>
        <Route path="/products">
          {/* <ListHeader>Hall of Fame</ListHeader> */}
          {/* {NftView()} */}
          <NftList nftDelete={nftDelete} nftData={_nfts} setNft={setNft} />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;

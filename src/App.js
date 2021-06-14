import "./App.css";
// import nftData from "./data.js";
import NftList from "./components/NftList";
import { ThemeProvider } from "styled-components";
import {
  Title,
  Description,
  ShopImage,
  ListHeader,
  GlobalStyle,
  ToggleButton,
} from "./styles";
import { useState } from "react";
import NftDetail from "./components/NftDetail";
import nftData from "./data";
const theme = {
  light: {
    backgroundColor: "white",
    mainColor: "black",
  },
  dark: {
    backgroundColor: "black",
    mainColor: "white",
  },
};
function App() {
  const [currentTheme, setCurrentTheme] = useState("dark");
  const [nft, setNft] = useState(nftData[null]);
  const toggleCurrentTheme = () => {
    if (currentTheme === "dark") setCurrentTheme("light");
    else setCurrentTheme("dark");
  };
  const NftView = () => {
    if (nft) return <NftDetail nft={nft}></NftDetail>;
    else return <NftList setNft={setNft} />;
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <div>
        <ToggleButton id="1" onClick={toggleCurrentTheme}>
          {currentTheme === "light" ? "Dark" : "Light"}mode
        </ToggleButton>
        <Title>The NiFTy Shop</Title>
        <Description>your go to NFT shop</Description>
        <ShopImage
          alt="nft"
          src="https://www.forbes.com/advisor/wp-content/uploads/2021/04/NFT.jpeg-900x510.jpg"
        />
      </div>
      <div>
        <ListHeader>Hall of Fame</ListHeader>
        {NftView()}
      </div>
    </ThemeProvider>
  );
}

export default App;

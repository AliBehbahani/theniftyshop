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
} from "./styles";
const theme = {
  backgroundColor: "black",
  mainColor: "white",
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>
        <Title>The NiFTy Shop</Title>
        <Description>your go to NFT shop</Description>
        <ShopImage
          alt="nft"
          src="https://www.forbes.com/advisor/wp-content/uploads/2021/04/NFT.jpeg-900x510.jpg"
        />
      </div>
      <div>
        <ListHeader>Hall of Fame</ListHeader>
        <NftList />;
      </div>
    </ThemeProvider>
  );
}

export default App;

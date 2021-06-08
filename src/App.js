import "./App.css";
import nftData from "./data.js";
import NftList from "./components/NftList";

function App() {
  return (
    <div>
      <div>
        <h1 className="title title1">The NiFTy Shop</h1>
        <h4 className="title title2">your go to NFT shop</h4>
        <img
          className="image1"
          alt="nft"
          src="https://www.forbes.com/advisor/wp-content/uploads/2021/04/NFT.jpeg-900x510.jpg"
        />
      </div>
      <div>
        <h2>Hall of Fame</h2>
        <NftList />;
      </div>
    </div>
  );
}

export default App;

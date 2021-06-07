import "./App.css";
import nftData from "./data.js";

function App() {
  const nftList = nftData.map((nft) => (
    <div className="listElements" key={nft.id}>
      <img className="listImages" src={nft.image} />
      <p>{nft.name}</p>
      <p>{nft.price}</p>
    </div>
  ));

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
      <div>{nftList}</div>
    </div>
  );
}

export default App;

import nftData from "../data.js";
import NftItem from "./NftItems.js";
const NftList = () => {
  const nftList = nftData.map((nft) => (
    <NftItem id={nft.id} image={nft.image} name={nft.name} price={nft.price} />
  ));
  return nftList;
};

export default NftList;

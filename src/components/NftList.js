import nftData from "../data.js";
import NftItem from "./NftItems.js";
import SearchBar from "./SearchBar.js";
import { NftWrapper } from "../styles";
import { useState } from "react";
const NftList = (props) => {
  const [query, setQuery] = useState("");
  const filterNfts = nftData.filter((nft) =>
    nft.name.toLowerCase().includes(query.toLowerCase())
  );
  const nftList = filterNfts.map((nft) => (
    <NftItem nft={nft} setNft={props.setNft} />
  ));
  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <NftWrapper>{nftList}</NftWrapper>
    </div>
  );
};

export default NftList;

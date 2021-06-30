//import nftData from "../data.js";
import NftItem from "./NftItems.js";
import SearchBar from "./SearchBar.js";
import { NftWrapper } from "../styles";
import { useState } from "react";
import { Helmet } from "react-helmet";
const NftList = (props) => {
  const [query, setQuery] = useState("");

  const filterNfts = props.nftData.filter((nft) =>
    nft.name.toLowerCase().includes(query.toLowerCase())
  );
  const nftList = filterNfts.map((nft) => (
    <NftItem nft={nft} setNft={props.setNft} nftDelete={props.nftDelete} />
  ));
  return (
    <div>
      <Helmet>
        <title>Products</title>
      </Helmet>
      <div>
        <SearchBar setQuery={setQuery} />
        <NftWrapper>{nftList}</NftWrapper>
      </div>
    </div>
  );
};

export default NftList;

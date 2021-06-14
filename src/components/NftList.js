import nftData from "../data.js";
import NftItem from "./NftItems.js";
import SearchBar from "./SearchBar.js";
import { NftWrapper } from "../styles";
import { useState } from "react";
const NftList = (props) => {
  const [query, setQuery] = useState("");
  const [_nfts, setNfts] = useState(nftData);
  const nftDelete = (nftId) => {
    const undeletedNfts = _nfts.filter((nft) => nft.id !== nftId);
    setNfts(undeletedNfts);
  };
  const filterNfts = nftData.filter((nft) =>
    nft.name.toLowerCase().includes(query.toLowerCase())
  );
  const nftList = filterNfts.map((nft) => (
    <NftItem nft={nft} setNft={props.setNft} nftDelete={nftDelete} />
  ));
  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <NftWrapper>{nftList}</NftWrapper>
    </div>
  );
};

export default NftList;

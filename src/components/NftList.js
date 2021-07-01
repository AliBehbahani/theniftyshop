//import nftData from "../data.js";
import NftItem from "./NftItems.js";
import SearchBar from "./SearchBar.js";
import { NftWrapper } from "../styles";
import { useState } from "react";
import { Helmet } from "react-helmet";
import nftStore from "../stores/nftStore.js";
import { observer } from "mobx-react";
const NftList = () => {
  const [query, setQuery] = useState("");

  const filterNfts = nftStore.nfts.filter((nft) =>
    nft.name.toLowerCase().includes(query.toLowerCase())
  );
  const nftList = filterNfts.map((nft) => <NftItem nft={nft} />);
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

export default observer(NftList);

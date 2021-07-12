//import nftData from "../data.js";
import NftItem from "./NftItems.js";
import SearchBar from "./SearchBar.js";
import { NftWrapper } from "../styles";
import { useState } from "react";
import { Helmet } from "react-helmet";

import { observer } from "mobx-react";

import { AddButtonStyled } from "../styles";
import NftModal from "./modals/NftModal";

import authStore from "../stores/authStore";

const NftList = ({ nfts, gallery }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const filterNfts = nfts.filter((nft) =>
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
        {authStore.user && <AddButtonStyled size="3em" onClick={openModal} />}
        <NftModal closeModal={closeModal} isOpen={isOpen} gallery={gallery} />
        <NftWrapper>{nftList}</NftWrapper>
      </div>
    </div>
  );
};

export default observer(NftList);

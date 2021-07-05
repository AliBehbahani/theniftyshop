// import nftData from "../data";
import { makeAutoObservable } from "mobx";
import slugify from "react-slugify";
import axios from "axios";
class NftStore {
  nfts = [];

  constructor() {
    makeAutoObservable(this);
  }
  fetchNfts = async () => {
    try {
      const res = await axios.get("http://localhost:8000/nfts");
      this.nfts = res.data;
    } catch (error) {
      console.error("fetchNfts:", error);
    }
  };

  nftDelete = async (nftId) => {
    try {
      await axios.delete(`http://localhost:8000/nfts/${nftId}`);
      const undeletedNfts = this.nfts.filter((nft) => nft.id !== nftId);
      this.nfts = undeletedNfts;
    } catch (error) {
      console.error("deleteNfts:", error);
    }
  };

  nftCreate = (newNft) => {
    this.nfts.push(newNft);
    newNft.id = this.nfts.length + 1;
    newNft.slug = slugify(newNft.name);
  };

  nftUpdate = (updateNft) => {
    const nft = this.nfts.find((nft) => nft.id === updateNft.id);
    nft.slug = slugify(updateNft.name);
    nft.name = updateNft.name;
    nft.price = updateNft.price;
    nft.description = updateNft.description;
    nft.image = updateNft.image;
  };
}
const nftStore = new NftStore();
nftStore.fetchNfts();
export default nftStore;

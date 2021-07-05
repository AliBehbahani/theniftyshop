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

  nftCreate = async (newNft) => {
    try {
      const response = await axios.post("http://localhost:8000/nfts", newNft);
      this.nfts.push(response.data);
    } catch (error) {
      console.error("createNfts:", error);
    }
  };

  nftUpdate = async (updateNft) => {
    try {
      await axios.put(`http://localhost:8000/nfts/${updateNft.id}`, updateNft);
      const nft = this.nfts.find((nft) => nft.id === updateNft.id);
      nft.slug = slugify(updateNft.name);
      nft.name = updateNft.name;
      nft.price = updateNft.price;
      nft.description = updateNft.description;
      nft.image = updateNft.image;
    } catch (error) {
      console.error("updateNfts:", error);
    }
  };
}
const nftStore = new NftStore();
nftStore.fetchNfts();
export default nftStore;

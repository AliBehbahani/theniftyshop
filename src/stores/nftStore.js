// import nftData from "../data";
import { makeAutoObservable } from "mobx";
import slugify from "react-slugify";
import axios from "axios";
class NftStore {
  nfts = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }
  fetchNfts = async () => {
    try {
      const res = await axios.get("http://localhost:8000/nfts");
      this.nfts = res.data;
      this.loading = false;
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

  nftCreate = async (newNft, gallery) => {
    try {
      const formData = new FormData();
      for (const key in newNft) formData.append(key, newNft[key]);

      const response = await axios.post(
        `http://localhost:8000/galleries/${gallery.id}/nfts`,
        formData
      );
      this.nfts.push(response.data);
      gallery.nfts.push({ id: response.data.id });
    } catch (error) {
      console.error("createNfts:", error);
    }
  };

  nftUpdate = async (updateNft) => {
    try {
      const formData = new FormData();
      for (const key in updateNft) formData.append(key, updateNft[key]);

      const response = await axios.put(
        `http://localhost:8000/nfts/${updateNft.id}`,
        formData
      );
      const nft = this.nfts.find((nft) => nft.id === response.data.id);
      // nft.slug = slugify(updateNft.name);
      // nft.name = updateNft.name;
      // nft.price = updateNft.price;
      // nft.description = updateNft.description;
      // nft.image = updateNft.image;
      for (const key in nft) nft[key] = response.data[key];
    } catch (error) {
      console.error("updateNfts:", error);
    }
  };
  getNftById = (nftId) => this.nfts.find((nft) => nft.id === nftId);
}
const nftStore = new NftStore();
nftStore.fetchNfts();
export default nftStore;

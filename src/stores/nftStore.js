import nftData from "../data";
import { makeAutoObservable } from "mobx";
import slugify from "react-slugify";
class NftStore {
  nfts = nftData;

  constructor() {
    makeAutoObservable(this);
  }

  nftDelete = (nftId) => {
    const undeletedNfts = this.nfts.filter((nft) => nft.id !== nftId);
    this.nfts = undeletedNfts;
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
export default nftStore;

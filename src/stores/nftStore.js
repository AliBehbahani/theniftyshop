import nftData from "../data";
import { makeAutoObservable } from "mobx";
class NftStore {
  nfts = nftData;

  constructor() {
    makeAutoObservable(this);
  }

  nftDelete = (nftId) => {
    const undeletedNfts = this.nfts.filter((nft) => nft.id !== nftId);
    this.nfts = undeletedNfts;
  };
}
const nftStore = new NftStore();
export default nftStore;

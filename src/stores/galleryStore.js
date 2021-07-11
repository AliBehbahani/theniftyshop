// import nftData from "../data";
import { makeAutoObservable } from "mobx";
import axios from "axios";
class GalleryStore {
  galleries = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }
  fetchGalleries = async () => {
    try {
      const res = await axios.get("http://localhost:8000/galleries");
      this.galleries = res.data;
      this.loading = false;
    } catch (error) {
      console.error("fetchGalleries:", error);
    }
  };

  galleryCreate = async (newGallery) => {
    try {
      const formData = new FormData();
      for (const key in newGallery) formData.append(key, newGallery[key]);

      const response = await axios.post(
        "http://localhost:8000/galleries",
        formData
      );
      response.data.nfts = [];
      this.galleries.push(response.data);
    } catch (error) {
      console.error("galleryCreate:", error);
    }
  };
}
const galleryStore = new GalleryStore();
galleryStore.fetchGalleries();
export default galleryStore;

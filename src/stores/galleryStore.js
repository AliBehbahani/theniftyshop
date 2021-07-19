//library imports
import { makeAutoObservable } from "mobx";
//components
import instance from "./instance";

class GalleryStore {
  galleries = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }
  fetchGalleries = async () => {
    try {
      const res = await instance.get("/galleries");
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

      const response = await instance.post("/galleries", formData);
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

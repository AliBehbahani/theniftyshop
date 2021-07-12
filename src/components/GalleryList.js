import galleryStore from "../stores/galleryStore";
import GalleryItems from "./GalleryItems";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { observer } from "mobx-react";
import authStore from "../stores/authStore";
const GalleryList = () => {
  const [query, setQuery] = useState("");
  const galleries = galleryStore.galleries
    .filter((gallery) =>
      gallery.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((gallery) => <GalleryItems gallery={gallery} />);

  return (
    <div>
      <h1>Galeries</h1>
      <SearchBar setQuery={setQuery} />
      {/* {authStore.user&& ididnt do it yet } */}

      {galleries}
    </div>
  );
};

export default observer(GalleryList);

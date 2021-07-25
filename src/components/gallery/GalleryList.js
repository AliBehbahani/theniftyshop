//licrary imports
import { observer } from "mobx-react";
import { useState } from "react";
//components
import GalleryItems from "./GalleryItems";
import GalleryModal from "../modals/GalleryModal";
import SearchBar from "../SearchBar";
//stores
import galleryStore from "../../stores/galleryStore";
import authStore from "../../stores/authStore";
//styles
import { AddButtonStyled, ListWrapper } from "../../styles";

const GalleryList = () => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  const galleries = galleryStore.galleries
    .filter((gallery) =>
      gallery.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((gallery) => <GalleryItems gallery={gallery} />);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      {authStore.user && <AddButtonStyled size="3em" onClick={openModal} />}
      <GalleryModal closeModal={closeModal} isOpen={isOpen} />
      <ListWrapper>{galleries}</ListWrapper>
    </div>
  );
};

export default observer(GalleryList);

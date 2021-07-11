import Modal from "react-modal";
import { useState } from "react";
import galleryStore from "../../stores/galleryStore";

const GalleryModal = (props) => {
  const [gallery, setGallery] = useState({
    name: "",
    image: "",
  });
  const handleChange = (event) => {
    setGallery({ ...nft, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.oldNft
      ? nftStore.nftUpdate(nft)
      : nftStore.nftCreate(nft, props.gallery);

    props.closeModal();
  };

  const handleImage = (event) => {
    setNft({ ...nft, image: event.target.files[0] });
  };
  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.closeModal}
        contentLabel="Nft Modal"
      >
        <form onSubmit={handleSubmit}>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">name</label>
              <input
                type="text"
                class="form-control"
                id="inputEmail4"
                placeholder="name"
                onChange={handleChange}
                name="name"
                required="required"
                value={nft.name}
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">price</label>
              <input
                type="number"
                class="form-control"
                id="inputPassword4"
                placeholder="price"
                onChange={handleChange}
                name="price"
                min="0"
                value={nft.price}
              />
            </div>
          </div>
          <div class="form-group">
            <label for="inputAddress">description</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="Description"
              onChange={handleChange}
              name="description"
              required="required"
              value={nft.description}
            />
          </div>
          <div class="form-group">
            <label for="inputAddress2">image</label>
            <input
              type="file"
              class="form-control"
              id="inputAddress2"
              placeholder="Image"
              onChange={handleImage}
              name="image"
              required="required"
            />
          </div>
          <button padding="2em" type="submit" class="btn btn-primary">
            {props.oldNft ? "Update" : "Add"}
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default GalleryModal;

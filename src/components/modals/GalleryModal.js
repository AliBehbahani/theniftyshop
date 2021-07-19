//library imports
import Modal from "react-modal";
import { useState } from "react";
//stores
import galleryStore from "../../stores/galleryStore";

const GalleryModal = (props) => {
  const [gallery, setGallery] = useState({
    name: "",
    image: "",
  });
  const handleChange = (event) => {
    setGallery({ ...gallery, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    galleryStore.galleryCreate(gallery);
    props.closeModal();
  };

  const handleImage = (event) => {
    setGallery({ ...gallery, image: event.target.files[0] });
  };
  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.closeModal}
        contentLabel="Gallery Modal"
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
                value={gallery.name}
              />
            </div>
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
            />
          </div>
          <button padding="2em" type="submit" class="btn btn-primary">
            Add
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default GalleryModal;

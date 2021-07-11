import { GalleryImages } from "../styles";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
const GalleryItems = ({ gallery }) => {
  return (
    <div>
      <Link to={`/galleries/${gallery.slug}`}>
        <GalleryImages src={gallery.image} alt={gallery.name} />
      </Link>

      <p>{gallery.name}</p>
    </div>
  );
};

export default observer(GalleryItems);

//library imports
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
//styles
import { GalleryImages } from "../../styles";

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

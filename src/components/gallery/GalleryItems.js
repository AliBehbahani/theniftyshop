//library imports
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
//styles
import { GalleryWrapper } from "../../styles";

const GalleryItems = ({ gallery }) => {
  return (
    <GalleryWrapper>
      <Link to={`/galleries/${gallery.slug}`}>
        <img src={gallery.image} alt={gallery.name} />
      </Link>
      <p>{gallery.name}</p>
    </GalleryWrapper>
  );
};

export default observer(GalleryItems);

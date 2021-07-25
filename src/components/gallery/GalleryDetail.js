//licrary imports
import { useParams } from "react-router";
import { observer } from "mobx-react";
//components
import NftList from "../nft/NftList";
//stores
import nftStore from "../../stores/nftStore";
import galleryStore from "../../stores/galleryStore";
//styles
import { GalleryDetailWrapper } from "../../styles";

const GalleryDetail = () => {
  const { gallerySlug } = useParams();
  const gallery = galleryStore.galleries.find(
    (gallery) => gallery.slug === gallerySlug
  );
  const nfts = gallery.nfts.map((nft) => nftStore.getNftById(nft.id));
  return (
    <div>
      <GalleryDetailWrapper>
        <h2>{gallery.name}</h2>
        <img src={gallery.image} alt={gallery.name} />
      </GalleryDetailWrapper>
      <NftList nfts={nfts} gallery={gallery} />
    </div>
  );
};

export default observer(GalleryDetail);

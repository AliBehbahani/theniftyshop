import { useParams } from "react-router";
import galleryStore from "../stores/galleryStore";
import { DetailWrapper } from "../styles";
import { observer } from "mobx-react";
import NftList from "./NftList";
import nftStore from "../stores/nftStore";
const GalleryDetail = () => {
  const { gallerySlug } = useParams();
  const gallery = galleryStore.galleries.find(
    (gallery) => gallery.slug === gallerySlug
  );
  const nfts = gallery.nfts.map((nft) => nftStore.getNftById(nft.id));
  return (
    <div>
      <DetailWrapper>
        <h2>{gallery.name}</h2>
        <img src={gallery.image} alt={gallery.name} />
      </DetailWrapper>
      <NftList nfts={nfts} gallery={gallery} />
    </div>
  );
};

export default observer(GalleryDetail);

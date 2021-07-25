//library imports
import { useParams, Redirect, Link } from "react-router-dom";
import { observer } from "mobx-react";
import { Helmet } from "react-helmet";
//components
import DeleteButton from "../buttons/DeleteButton";
//stores
import nftStore from "../../stores/nftStore";
//styles
import {
  BackButton,
  DetailWrapper,
  ImageDetailWrapper,
  ButtonWrapper,
} from "../../styles";

const NftDetail = () => {
  const nftSlug = useParams().nftSlug;
  const nft = nftStore.nfts.find((nft) => nft.slug === nftSlug);
  if (!nft) return <Redirect to="/nfts" />;

  return (
    <div>
      <Helmet>
        <title>Detail Page</title>
      </Helmet>
      <ImageDetailWrapper>
        <img src={nft.image} />
      </ImageDetailWrapper>
      <DetailWrapper>
        <p className="firstP">{nft.name}</p>
        <p>{nft.price} $</p>
        <p>{nft.description}</p>
        <ButtonWrapper>
          <BackButton to="/nfts">Back</BackButton>
          <DeleteButton className="deleteButtonDetail" nftId={nft.id} />
        </ButtonWrapper>
      </DetailWrapper>
    </div>
  );
};
export default observer(NftDetail);

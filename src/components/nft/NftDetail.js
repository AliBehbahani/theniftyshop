//library imports
import { useParams, Redirect, Link } from "react-router-dom";
import { observer } from "mobx-react";
import { Helmet } from "react-helmet";
//components
import DeleteButton from "../buttons/DeleteButton";
//stores
import nftStore from "../../stores/nftStore";
//styles
import { DetailWrapper } from "../../styles";

const NftDetail = () => {
  const nftSlug = useParams().nftSlug;
  const nft = nftStore.nfts.find((nft) => nft.slug === nftSlug);
  if (!nft) return <Redirect to="/products" />;

  return (
    <div>
      <Helmet>
        <title>Detail Page</title>
      </Helmet>
      <DetailWrapper>
        <img src={nft.image} />
        <p>{nft.name}</p>
        <p>{nft.price}</p>
        <p>{nft.description}</p>
        <Link to="/products">Back</Link>
        <DeleteButton nftId={nft.id} />
      </DetailWrapper>
    </div>
  );
};
export default observer(NftDetail);

import { DetailWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import { useParams, Redirect, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import nftStore from "../stores/nftStore";
import { observer } from "mobx-react";
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

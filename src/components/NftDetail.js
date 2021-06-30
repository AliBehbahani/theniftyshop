import { DetailWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import { useParams, Redirect, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const NftDetail = (props) => {
  const nftSlug = useParams().nftSlug;
  const nft = props.nftData.find((nft) => nft.slug === nftSlug);
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
        <DeleteButton
          nftDelete={props.nftDelete}
          nftId={nft.id}
          setNft={props.setNft}
        />
      </DetailWrapper>
    </div>
  );
};
export default NftDetail;

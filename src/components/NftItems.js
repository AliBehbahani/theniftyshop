// import nftData from "../data";
import { NftWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import { Link } from "react-router-dom";
const NftItem = (props) => {
  return (
    <NftWrapper key={props.nft.id}>
      <Link to={`/products/${props.nft.slug}`}>
        <img
          className="listImages"
          src={props.nft.image}
          alt={props.nft.name}
        />
      </Link>

      <p className="nftDescription">{props.nft.name}</p>

      <p className="price">{props.nft.price}</p>
      <DeleteButton
        nftDelete={props.nftDelete}
        nftId={props.nft.id}
        setNft={props.setNft}
      />
    </NftWrapper>
  );
};
export default NftItem;

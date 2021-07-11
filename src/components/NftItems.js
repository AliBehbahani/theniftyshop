// import nftData from "../data";
import { NftWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import { Link } from "react-router-dom";
import UpdateButton from "./buttons/UpdateButton";
import { observer } from "mobx-react";
const NftItem = (props) => {
  return (
    <NftWrapper key={props.nft.id}>
      <Link to={`/nfts/${props.nft.slug}`}>
        <img
          className="listImages"
          src={props.nft.image}
          alt={props.nft.name}
        />
      </Link>

      <p className="nftDescription">{props.nft.name}</p>

      <p className="price">{props.nft.price}$</p>
      <UpdateButton nft={props.nft} />
      <DeleteButton nftId={props.nft.id} />
    </NftWrapper>
  );
};
export default observer(NftItem);

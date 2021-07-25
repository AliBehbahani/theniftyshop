//library imports
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
//components
import DeleteButton from "../buttons/DeleteButton";
import UpdateButton from "../buttons/UpdateButton";
//stores
import authStore from "../../stores/authStore";
//styles
import { NftWrapper } from "../../styles";

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

      <p className="nftName">{props.nft.name}</p>

      <p className="price">{props.nft.price}$</p>
      {authStore.user && (
        <>
          <UpdateButton nft={props.nft} />
          <DeleteButton nftId={props.nft.id} />
        </>
      )}
    </NftWrapper>
  );
};
export default observer(NftItem);

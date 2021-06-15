import { DetailWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";

const NftDetail = (props) => {
  return (
    <DetailWrapper>
      <img src={props.nft.image} />
      <p>{props.nft.name}</p>
      <p>{props.nft.price}</p>
      <p>{props.nft.description}</p>
      <button onClick={() => props.setNft(null)}>Back</button>
      <DeleteButton
        nftDelete={props.nftDelete}
        nftId={props.nft.id}
        setNft={props.setNft}
      />
    </DetailWrapper>
  );
};
export default NftDetail;

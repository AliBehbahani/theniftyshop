import { DetailWrapper } from "../styles";

const NftDetail = (props) => {
  return (
    <DetailWrapper>
      <img src={props.nft.image} />
      <p>{props.nft.name}</p>
      <p>{props.nft.price}</p>
      <p>{props.nft.description}</p>
    </DetailWrapper>
  );
};
export default NftDetail;

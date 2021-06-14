// import nftData from "../data";
import { NftWrapper } from "../styles";
const NftItem = (props) => {
  return (
    <NftWrapper key={props.nft.id} onClick={() => props.setNft(props.nft)}>
      <img className="listImages" src={props.nft.image} alt={props.nft.name} />
      <p className="nftDescription">{props.nft.name}</p>

      <p className="price">{props.nft.price}</p>
    </NftWrapper>
  );
};
export default NftItem;

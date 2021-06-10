// import nftData from "../data";
import { NftWrapper } from "../styles";
const NftItem = (props) => {
  return (
    <NftWrapper key={props.id}>
      <img className="listImages" src={props.image} />
      <p className="nftDescription">{props.name}</p>

      <p className="price">{props.price}</p>
    </NftWrapper>
  );
};
export default NftItem;

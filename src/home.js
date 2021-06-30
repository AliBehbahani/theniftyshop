import { Title, Description, ShopImage } from "./styles";

const HomePage = () => {
  return (
    <div>
      <Title>The NiFTy Shop</Title>
      <Description>your go to NFT shop</Description>
      <ShopImage
        alt="nft"
        src="https://www.forbes.com/advisor/wp-content/uploads/2021/04/NFT.jpeg-900x510.jpg"
      />
    </div>
  );
};
export default HomePage;

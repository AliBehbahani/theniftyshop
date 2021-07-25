import { Title, Description, ShopImage } from "./styles";

const HomePage = () => {
  return (
    <div>
      <Title>The NiFTy Shop</Title>
      <Description>your go to NFT shop</Description>
      <ShopImage
        alt="mainNftImage"
        src="https://wallpaperaccess.com/full/42337.jpg"
      />
    </div>
  );
};
export default HomePage;

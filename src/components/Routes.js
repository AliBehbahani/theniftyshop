//library imports
import { Route, Switch } from "react-router";
//components
import NftDetail from "./nft/NftDetail";
import NftList from "./nft/NftList";
import GalleryDetail from "./gallery/GalleryDetail";
import GalleryList from "./gallery/GalleryList";
import HomePage from "../home";
//stores
import nftStore from "../stores/nftStore";

const Routes = () => {
  return (
    <Switch>
      <Route path="/signup" />
      <Route path="/nfts/:nftSlug">
        <NftDetail />
      </Route>
      <Route path="/nfts">
        <NftList nfts={nftStore.nfts} />
      </Route>
      <Route path="/galleries/:gallerySlug">
        <GalleryDetail />
      </Route>
      <Route path="/galleries">
        <GalleryList />
      </Route>
      <Route exact path="/">
        <HomePage />
      </Route>
    </Switch>
  );
};

export default Routes;

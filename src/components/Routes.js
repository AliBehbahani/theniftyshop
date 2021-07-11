import { Route, Switch } from "react-router";
import NftDetail from "./NftDetail";
import NftList from "./NftList";
import GalleryDetail from "./GalleryDetail";
import GalleryList from "./GalleryList";
import HomePage from "../home";
import nftStore from "../stores/nftStore";

const Routes = () => {
  return (
    <Switch>
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

//library imports
import { observer } from "mobx-react";
//components
import SigninButton from "./buttons/SigninButton";
import SignupButton from "./buttons/SignupButton";
//stores
import authStore from "../stores/authStore";
//styles
import { NavProducts, NavBarStyled, ToggleButton, Logo } from "../styles";

const NavBar = (props) => {
  return (
    <NavBarStyled class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <Logo class="navbar-brand" to="/">
          <img src="https://art.pixilart.com/39f4649a097fab9.gif" />
        </Logo>
        <NavProducts className="nav-item active" to="/nfts">
          nfts
        </NavProducts>
        <NavProducts className="nav-item active" to="/galleries">
          galleries
        </NavProducts>

        {authStore.user ? (
          <>
            <p>welcome</p>
            <button onClick={authStore.signout}>sign out</button>
          </>
        ) : (
          <>
            <SignupButton />
            <SigninButton />
          </>
        )}
        <ToggleButton
          className="nav-item"
          id="1"
          onClick={props.toggleCurrentTheme}
        >
          {props.currentTheme === "light" ? "Dark" : "Light"}mode
        </ToggleButton>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link">Link</a>
            </li>
          </ul>
        </div>
      </div>
    </NavBarStyled>
  );
};

export default observer(NavBar);

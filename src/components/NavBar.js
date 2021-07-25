//library imports
import { observer } from "mobx-react";

//components
import SigninButton from "./buttons/SigninButton";
import SignupButton from "./buttons/SignupButton";
import SignoutButton from "./buttons/SignoutButton";
import darkLogo from "../assets/darkLogo.png";
//stores
import authStore from "../stores/authStore";

//styles
import {
  NavBarStyled,
  ToggleButton,
  Logo,
  NavBarContainer,
  NavContainer,
  NavItem,
  NavLinks,
  NavButtons,
  WelcomeMessage,
} from "../styles";

const NavBar = (props) => {
  return (
    <NavBarStyled>
      <NavBarContainer>
        <Logo to="/">
          <img src={darkLogo} />
        </Logo>
        <NavContainer>
          <NavItem>
            <NavLinks to="/nfts">NFTs</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/galleries">Galleries</NavLinks>
          </NavItem>

          <NavItem>
            <NavButtons>
              {authStore.user ? (
                <>
                  <WelcomeMessage>
                    welcome {authStore.user.username}!
                  </WelcomeMessage>
                  <SignoutButton />
                </>
              ) : (
                <>
                  <SignupButton />
                  <SigninButton />
                </>
              )}
            </NavButtons>
          </NavItem>
          <NavItem>
            <NavButtons>
              <ToggleButton onClick={props.toggleCurrentTheme}>
                {props.currentTheme === "light" ? "Dark" : "Light"}mode
              </ToggleButton>
            </NavButtons>
          </NavItem>
        </NavContainer>
      </NavBarContainer>
    </NavBarStyled>
  );
};

export default observer(NavBar);

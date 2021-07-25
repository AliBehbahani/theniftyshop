//library imports
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { BiAddToQueue } from "react-icons/bi";
// import { NavBar } from "react-bootstrap";
//components
import SearchBar from "./components/SearchBar";
import DeleteButton from "./components/buttons/DeleteButton";
import AddButton from "./components/buttons/AddButton";
//======================== Theme ============================\\
export const GlobalStyle = createGlobalStyle`
body{  color: ${(props) => props.theme.mainColor};
     background-color: ${(props) => props.theme.backgroundColor}
    
    }
`;
//======================== NavBar ============================\\
export const NavBarStyled = styled.nav`
  background-color: ${(props) => props.theme.backgroundColor};
  hieght: 60px;
  display: flex;
  justify-content: center;
  font-size: 1.3rem;
  position: sticky;
  top: 0;
`;
export const NavBarContainer = styled.div`
  diplay: flex;
  justify-content: space-between;
  height: 60px;
  width: 100%;
  padding: 0 24px;
`;
export const Logo = styled(Link)`
  img {
    width: 50px;
    justify-self: flex-start;
    display: flex;
    align-items: center;
    margin-left: -10px;
    margin-top: 5px;
  }
`;
export const NavContainer = styled.ul`
  diplay: flex;
  align-items: center;
  text-align: center;
  margin-right: 22px;
  list-style: none;
`;
export const NavItem = styled.li`
  height: 70px;
  margin-left: 40px;
  margin-top: -40px;
  float: left;
  font-family: Helvetica Neue;
`;
export const NavLinks = styled(NavLink)`
  color: ${(props) => props.theme.mainColor};
  display: flex;
  align-items: center;
  padding: 0 1rem;
  hieght: 100%;
  text-decoration: none;
  padding: 5px;

  &.active {
    border-bottom: 3px solid ${(props) => props.theme.accentColor};
  }
  :hover {
    color: ${(props) => props.theme.mainColor};
    border-bottom: 3px solid ${(props) => props.theme.accentColor};
  }
`;
export const NavButtons = styled.li`
  color: ${(props) => props.theme.mainColor};
  display: flex;
  align-items: center;
  padding: 0 3rem;
  hieght: 100%;
  text-decoration: none;
`;

export const SignupButtonStyled = styled.button`
  margin-left: 580px;
  margin-top: -3px;
  border-radius: 10px;
  hieght: 50px;
  width: 100px;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.mainColor};
  border: 3px solid ${(props) => props.theme.backgroundColor};
  :hover {
    background-color: ${(props) => props.theme.accentColor};
  }
`;
export const SigninButtonStyled = styled.button`
  margin-top: -3px;
  border-radius: 10px;
  hieght: 50px;
  width: 100px;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.mainColor};
  border: 3px solid ${(props) => props.theme.backgroundColor};
  :hover {
    background-color: ${(props) => props.theme.accentColor};
  }
`;
export const SignoutButtonStyled = styled.button`
  margin-left: 570px;
  margin-top: -15px;
  border-radius: 10px;
  hieght: 50px;
  width: 100px;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.mainColor};
  border: 3px solid ${(props) => props.theme.backgroundColor};
  :hover {
    background-color: ${(props) => props.theme.accentColor};
  }
`;
export const WelcomeMessage = styled.p`
  margin-top: 5px;
  margin-left: -30px;
`;
export const ToggleButton = styled.button`
  margin-top: -3px;
  margin-left: -130px;
  border-radius: 10px;
  hieght: 50px;
  width: 150px;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.mainColor};
  border: 3px solid ${(props) => props.theme.backgroundColor};
  :hover {
    background-color: ${(props) => props.theme.accentColor};
  }
`;
//======================== Home ============================\\
export const Title = styled.h1`
  text-align: center;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  ${"" /* color: white; */}
  font-size: 60px;
  position: absolute;
  margin-top: 20px;
  margin-left: 530px;
`;
export const Description = styled.h4`
  text-align: center;

  position: absolute;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  ${"" /* color: white; */}
  font-size: 30px;
  margin-top: 90px;
  margin-left: 590px;
`;
export const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  width: 100%;
  height: 717px;
`;
export const ListHeader = styled.h2`
  font-size: 40px;
  ${"" /* color: white; */}
  text-align: center;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  border: 5px solid rgb(168, 24, 168);
`;
//======================== List ============================\\
export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;
export const AddButtonStyled = styled(BiAddToQueue)`
  color: ${(props) => props.theme.mainColor};
  width: 50px;
  margin-left: 370px;
  margin-top: -100px;
  padding: 10px;
`;
export const ListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const NftWrapper = styled.div`
  margin: 50px;
  hieght: 300px;
  width: 250px;
  border-radius: 20px;

  background-color: ${(props) => props.theme.accentColor};
  img {
    width: 200px;
    height: 200px;
    margin-top: 40px;
    margin-left: 25px;
    border-radius: 10px;
  }
  .price {
    text-align: center;
    margin-top: -10px;
    font-size: 20px;
    font-family: Impact, "Arial Narrow Bold";
    color: ${(props) => props.theme.mainColor};
  }
  .nftName {
    font-size: 20px;
    text-align: center;
    margin-top: 20px;
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    color: ${(props) => props.theme.mainColor};
  }
`;

//======================== Detail ============================\\
export const DetailWrapper = styled.div`
  border-radius: 20px;
  background-color: ${(props) => props.theme.accentColor};
  width: 500px;
  height: 500px;
  margin-top: 100px;
  margin-right: 190px;
  float: right;

  .firstP {
    margin-top: 150px;
  }
  p {
    font-family: Helvetica Neue;
    font-size: 24px;
    margin-top: 30px;
    text-align: center;
  }
  .deleteButtonDetail {
    margin-top: 100px;
  }
`;
export const BackButton = styled(Link)`
  font-family: Helvetica Neue;
  color: ${(props) => props.theme.mainColor};
  align-items: center;
  text-decoration: none;
  margin-left: 160px;
  font-size: 18px;
  :hover {
    color: ${(props) => props.theme.mainColor};
  }
`;
export const ButtonWrapper = styled.div`
  margin-top: 60px;
`;

export const ImageDetailWrapper = styled.div`
  float: left;
  height: 100px;
  img {
    margin-top: 100px;
    margin-left: 190px;
    width: 500px;
    height: 500px;
    float: left;
    border-radius: 20px;
  }
`;
//======================== Shared Buttons ============================\\
export const DeleteButtonStyled = styled.button`
  margin-left: 75px;
  margin-bottom: 30px;
  font-family: Helvetica Neue;
  font-size: 18px;
  border-radius: 10px;
  hieght: 50px;
  width: 100px;
  background-color: ${(props) => props.theme.accentColor};
  color: ${(props) => props.theme.mainColor};
  border: 3px solid ${(props) => props.theme.accentColor};
  :hover {
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;
export const UpdateButtonStyled = styled.button`
  margin-left: 75px;
  margin-bottom: 5px;
  margin-top: -10px;
  font-family: Helvetica Neue;
  align-items: center;
  font-size: 18px;
  border-radius: 10px;
  hieght: 50px;
  width: 100px;
  background-color: ${(props) => props.theme.accentColor};
  color: ${(props) => props.theme.mainColor};
  border: 3px solid ${(props) => props.theme.accentColor};
  :hover {
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;

//==========
export const GalleryWrapper = styled.div`
  margin: 50px;
  hieght: 300px;
  width: 250px;
  border-radius: 20px;
  float: left;

  background-color: ${(props) => props.theme.accentColor};
  img {
    width: 200px;
    height: 200px;
    margin-top: 40px;
    margin-left: 25px;
    border-radius: 10px;
  }
  p {
    text-align: center;
    margin-top: 20px;
    font-size: 22px;
    font-family: Helvetica Neue;
  }
`;
export const GalleryDetailWrapper = styled.div`
  margin: 20px;
  width: 500px;
  height: 500px;
  border-radius: 20px;
  float: left;

  background-color: ${(props) => props.theme.accentColor};
  img {
    width: 400px;
    height: 350px;
    margin-top: 40px;
    margin-left: 50px;

    border-radius: 10px;
  }
  h2 {
    text-align: center;
    margin-top: 20px;
    font-size: 35px;
    font-family: Helvetica Neue;
  }
`;

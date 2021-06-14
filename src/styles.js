import styled from "styled-components";
import SearchBar from "./components/SearchBar";
import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
body{  color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
    
    }
`;
export const Title = styled.h1`
  text-align: center;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  ${"" /* color: white; */}
  font-size: 40px;
`;
export const Description = styled.h4`
  text-align: center;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  ${"" /* color: white; */}
  font-size: 20px;
  margin-top: -25px;
`;
export const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 350px;
`;
export const ListHeader = styled.h2`
  font-size: 40px;
  ${"" /* color: white; */}
  text-align: center;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  border: 5px solid rgb(168, 24, 168);
`;
export const NftWrapper = styled.div`
  display: flex;
  img {
    width: 300px;
    height: 300px;
    border: 5px solid rgb(168, 24, 168);
    margin: 20px;
    display: inline;
  }
  .price {
    margin-left: 5px;
    font-size: 20px;
    margin-top: 160px;
    margin-left: 7%%;
    ${"" /* color: white; */}
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  }
  .nftDescription {
    font-size: 20px;
    margin-top: 160px;
    margin-left: 10%;
    ${"" /* color: white; */}
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  }
`;
export const ToggleButton = styled.button``;

export const SearchBarStyled = styled.input``;

export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  img {
    width: 40%;
    float: left;
  }
  p {
    vertical-align: middle;
  }
`;

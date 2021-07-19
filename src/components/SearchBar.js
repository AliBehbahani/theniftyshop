//styles
import { SearchBarStyled } from "../styles";

const SearchBar = (Props) => {
  return (
    <SearchBarStyled
      placeholder="Search NFT here"
      onChange={(event) => Props.setQuery(event.target.value)}
    />
  );
};

export default SearchBar;

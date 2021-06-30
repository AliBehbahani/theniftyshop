import { DeleteButtonStyled } from "../../styles";

const DeleteButton = (props) => {
  const handleDelete = () => {
    props.nftDelete(props.nftId);
    props.setNft(null);
  };
  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default DeleteButton;

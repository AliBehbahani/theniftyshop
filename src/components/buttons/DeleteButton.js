const DeleteButton = (props) => {
  const handleDelete = () => {
    props.nftDelete(props.nftId);
    props.setNft(null);
  };
  return <p onClick={handleDelete}>Delete</p>;
};

export default DeleteButton;

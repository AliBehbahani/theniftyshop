//library imports
import { useState } from "react";
//components
import NftModal from "../modals/NftModal";
//styles
import { UpdateButtonStyled } from "../../styles";

const UpdateButton = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <UpdateButtonStyled onClick={openModal}>Update</UpdateButtonStyled>
      <NftModal closeModal={closeModal} isOpen={isOpen} oldNft={props.nft} />
    </div>
  );
};

export default UpdateButton;

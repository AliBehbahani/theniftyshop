//library imports
import { useState } from "react";
//components
import SigninModal from "../modals/SigninModal";
//styles
import { SigninButtonStyled } from "../../styles";

const SigninButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <SigninButtonStyled onClick={openModal}>sign in</SigninButtonStyled>
      <SigninModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default SigninButton;

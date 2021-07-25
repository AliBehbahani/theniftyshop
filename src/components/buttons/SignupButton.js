//library imports
import { useState } from "react";
//components
import SignupModal from "../modals/SignupModal";
//styles
import { SignupButtonStyled } from "../../styles";

const SignupButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <SignupButtonStyled onClick={openModal}>sign up</SignupButtonStyled>
      <SignupModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default SignupButton;

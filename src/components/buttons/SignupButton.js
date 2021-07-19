//library imports
import { useState } from "react";
//components
import SignupModal from "../modals/SignupModal";

const SignupButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button onClick={openModal}>sign up</button>
      <SignupModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default SignupButton;

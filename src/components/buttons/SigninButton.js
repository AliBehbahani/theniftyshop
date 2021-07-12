import { useState } from "react";
import SigninModal from "../modals/SigninModal";

const SigninButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button onClick={openModal}>sign in</button>
      <SigninModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default SigninButton;

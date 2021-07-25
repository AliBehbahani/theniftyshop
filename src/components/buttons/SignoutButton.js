//stores
import authStore from "../../stores/authStore";
//styles
import { SignoutButtonStyled } from "../../styles";
const SignoutButton = () => {
  return (
    <SignoutButtonStyled onClick={authStore.signout}>
      sign out
    </SignoutButtonStyled>
  );
};

export default SignoutButton;

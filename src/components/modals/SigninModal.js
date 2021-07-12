import Modal from "react-modal";
import { useState } from "react";
import authStore from "../../stores/authStore";

const SigninModal = (props) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signin(user);
    props.closeModal();
  };
  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.closeModal}
        contentLabel="Nft Modal"
      >
        <form onSubmit={handleSubmit}>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">username</label>
              <input
                type="text"
                class="form-control"
                id="inputEmail4"
                placeholder="username"
                onChange={handleChange}
                name="username"
                required="required"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">password</label>
              <input
                type="password"
                class="form-control"
                id="inputPassword4"
                placeholder="password"
                onChange={handleChange}
                name="password"
              />
            </div>
          </div>

          <button padding="2em" type="submit" class="btn btn-primary">
            sign up
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default SigninModal;

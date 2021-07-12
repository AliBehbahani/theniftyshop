// import nftData from "../data";
import { makeAutoObservable } from "mobx";
import axios from "axios";
import decode from "jwt-decode";
class UserStore {
  user = null;
  constructor() {
    makeAutoObservable(this);
  }

  signup = async (newUser) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/signup",
        newUser
      );
      this.user = decode(response.data.token);
    } catch (error) {
      console.error("userCreate:", error);
    }
  };
  signin = async (userData) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/signin",
        userData
      );
      this.user = decode(response.data.token);
    } catch (error) {
      console.error("userSignin:", error);
    }
  };
}
const userStore = new UserStore();

export default userStore;

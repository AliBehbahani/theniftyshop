// import nftData from "../data";
import { makeAutoObservable } from "mobx";
import axios from "axios";
class UserStore {
  constructor() {
    makeAutoObservable(this);
  }

  signup = async (newUser) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/signup",
        newUser
      );
    } catch (error) {
      console.error("userCreate:", error);
    }
  };
}
const userStore = new UserStore();

export default userStore;

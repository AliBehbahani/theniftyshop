//library imports
import { makeAutoObservable } from "mobx";
import decode from "jwt-decode";
//components
import instance from "./instance";

class AuthStore {
  user = null;

  constructor() {
    makeAutoObservable(this);
  }

  signup = async (newUser) => {
    try {
      const response = await instance.post("/signup", newUser);
      this.setUser(response.data.token);
    } catch (error) {
      console.error("userCreate:", error);
    }
  };

  signin = async (userData) => {
    try {
      const response = await instance.post("/signin", userData);
      this.setUser(response.data.token);
    } catch (error) {
      console.error("userSignin:", error);
    }
  };

  setUser = (token) => {
    localStorage.setItem("userToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };

  signout = () => {
    delete instance.defaults.headers.common.Authorization;
    localStorage.removeItem("usertoken");
    this.user = null;
  };

  checkToken = () => {
    const token = localStorage.getItem("userToken");
    if (token) {
      const user = decode(token);
      if (user.expires >= Date.now()) {
        this.setUser(token);
      } else {
        this.signout();
      }
    }
  };
}
const authStore = new AuthStore();
authStore.checkToken();
export default authStore;

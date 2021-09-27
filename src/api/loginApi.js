import axiosClient from "./axiosClient";

const loginApi = {
  /**
   * login system admin
   */
  login(data) {
    const url = "/auth/login";
    return axiosClient.post(url, data);
  },
};

export default loginApi;

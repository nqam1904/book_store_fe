import axiosClient from "./axiosClient";

const userApi = {
  /**
   * Get all user
   */
  getAll() {
    const url = "/users";
    return axiosClient.get(url);
  },
  /**
   * Get one user
   */
  getOne(id) {
    const url = `/users${id}`;
    return axiosClient.get(url);
  },
  /**
   * add user
   */
  add(data) {
    const url = `/users`;
    return axiosClient.post(url, data);
  },
  /**
   * update user
   */
  update(data) {
    const url = `/users${data?.id}`;
    return axiosClient.put(url, data);
  },
  /**
   * delete user
   */
  remove(id) {
    const url = `/users${id}`;
    return axiosClient.delete(url);
  },
};
export default userApi;

import api from "../config";

const prefix = "users";

const usersService = () => {
  return {
    getProfile: (username) =>
      api.request({
        method: "GET",
        url: `${prefix}/${username}/`,
      }),
    updateProfile: (username) =>
      api.request({
        method: "PATCH",
        url: `${prefix}/${username}/`,
      }),
    getTopFrelancers: () =>
      api.request({
        method: "GET",
        url: `${prefix}/top/`,
      }),
    getSkills: () =>
      api.request({
        method: "GET",
        url: `${prefix}/skills/`,
      }),
  };
};

export default usersService;

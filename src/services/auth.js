import api from "../config";

const prefix = "auth";

const authService = () => {
  return {
    login: (username, password) =>
      api.request({
        method: "POST",
        url: `${prefix}/login`,
        data: { username, password },
      }),
    signup: (data) =>
      api.request({
        method: "POST",
        url: `${prefix}/register`,
        data,
      }),
  };
};

export default authService;

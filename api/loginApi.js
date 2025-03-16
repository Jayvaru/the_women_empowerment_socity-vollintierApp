import AxiosInstace from "./AxiosInstace";

export const loginApi = async (email, password) => {
  try {
    const response = await AxiosInstace.post("/users/login/", {
      user: {
        email,
        password,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const registerApi = async (email, password) => {
  try {
    const response = await AxiosInstace.post("/users/", {
      user: {
        email,
        password,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};  
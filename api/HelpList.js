import AxiosInstace from "./AxiosInstace";

export const getHelpList = async () => {
  try {
    const response = await AxiosInstace.get("/help/list/");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getHelpListById = async (id) => {
  try {
    const response = await AxiosInstace.get(`/help/${id}/`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateHelpList = async (id, help) => {
  try {
    const response = await AxiosInstace.put(`/help/${id}/`, {
      help,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
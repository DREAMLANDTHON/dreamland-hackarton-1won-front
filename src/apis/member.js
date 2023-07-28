import axios from "axios";

export const firstSignUp = async (data) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_URL}/api/user/first`,
    data
  );
  return response;
};

export const addtionalSignUp = async (data) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_URL}/api/user`,
    data
  );
  return response;
};

export const getProfile = async (id) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/api/user/${id}`
  );
  return response.data;
};

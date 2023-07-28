import axios from 'axios';

export const addLike = async (id, data) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_URL}/api/item/${id}/like`,
    data,
  );
  return response.data;
};

export const deleteLike = async (id, data) => {
  const response = await axios.delete(
    `${process.env.REACT_APP_BASE_URL}/api/item/${id}/like`,
    data,
  );
  return response.data;
};

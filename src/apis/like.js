import axios from 'axios';

export const addLike = async (id, data) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_URL}/api/item/${id}/like`,
    data,
  );
  return response;
};

export const deleteLike = async (id, data) => {
  const response = await axios.delete(
    `${process.env.REACT_APP_BASE_URL}/api/item/${id}/like`,
    data,
  );
  return response;
};

export const deleteLikeFetch = async (id, data) => {
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}/api/item/${id}/like`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  );
  return response.json();
};

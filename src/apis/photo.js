import axios from "axios";

export const ocrApi = async () => {
  // console.log(url)
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/api/ocr?url=https://firebasestorage.googleapis.com/v0/b/exalted-stage-387815.appspot.com/o/files%2F%5B17%5D%5B%E1%84%80%E1%85%A2%E1%84%87%E1%85%A1%E1%86%AF%E1%84%89%E1%85%A2%E1%84%87%E1%85%A1%E1%86%AF%5D%5B%E1%84%86%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%8F%E1%85%B3%E1%84%90%E1%85%A6%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3%5D%5B%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%A9%E1%86%BC%E1%84%87%E1%85%A1%E1%86%AF%E1%84%91%E1%85%AD%5D%20(2).jpg?alt=media&token=ff3d24aa-0009-4ce1-927d-1064efe00d22`
  );

  return response.data;
};

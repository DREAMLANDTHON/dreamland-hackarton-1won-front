import axios from "axios";

export const getFood = async ({
  pageNo = 1, // 페이지 번호
  numOfRows = 100, // 페이지당 데이터 수
  kind = "", // 품목 유형
  name = "", // 품목 이름
}) => {
  const baseUrl = "https://apis.data.go.kr/B553748/CertImgListServiceV2";
  const response =
    await axios.get(`${baseUrl}?ServiceKey=${process.env.OPEN_API_SERVICE_KEY_DECODED}
    &returnType=json
    &pageNo=${pageNo}
    &numOfRows=${numOfRows}
    &prdkind=${kind}
    &prdlstNm=${name}
    `);
  return response.data;
};

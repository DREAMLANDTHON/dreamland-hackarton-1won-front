import axios from "axios";

const baseUrl =
  "https://apis.data.go.kr/B553748/CertImgListServiceV2/getCertImgListServiceV2";
const serviceKey = encodeURIComponent(
  process.env.REACT_APP_SERVICE_KEY_DECODED
);

export const getFood = async (
  // name,
  name, // 품목 이름
  kind // 품목 유형
) => {
  let paramName = "";
  let paramKind = "";

  if (name) {
    paramName = `&prdlstNm=${encodeURIComponent(name)}`;
  }
  if (kind) {
    paramKind = `&prdkind=${encodeURIComponent(kind)}`;
  }

  const response = await axios.get(
    `${baseUrl}?ServiceKey=${serviceKey}${paramName}&returnType=json${paramKind}`
  );
  const items = response.data.body.items;

  return items.length === 1
    ? items[0].item
    : items.find(({ item }) => item.prdlstNm === name).item;
};

export const getCategorys = async (
  kind, // 품목 유형
  name
) => {
  let paramName = "";
  let paramKind = "";

  if (name) {
    paramName = `&prdlstNm=${encodeURIComponent(name)}`;
  }
  if (kind) {
    paramKind = `&prdkind=${encodeURIComponent(kind)}`;
  }

  const response = await axios.get(
    `${baseUrl}?ServiceKey=${serviceKey}${paramName}&returnType=json${paramKind}`
  );

  return response.data.body.items;
};

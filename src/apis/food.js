import axios from 'axios';

export const getFood = async (
  // name,
  name, // 품목 이름
  kind, // 품목 유형
) => {
  const baseUrl =
    'https://apis.data.go.kr/B553748/CertImgListServiceV2/getCertImgListServiceV2';

  let paramName = '';
  let paramKind = '';

  if (name) {
    paramName = `&prdlstNm=${encodeURIComponent(name)}`;
  }
  if (kind) {
    paramKind = `&prdkind=${encodeURIComponent(kind)}`;
  }

  const response = await axios.get(
    `${baseUrl}?ServiceKey=${process.env.REACT_APP_SERVICE_KEY_DECODED}${paramName}&returnType=json${paramKind}`,
  );
  console.log('hello');
  console.log(
    `${baseUrl}?ServiceKey=${process.env.REACT_APP_SERVICE_KEY_DECODED}${paramName}&returnType=json${paramKind}`,
  );

  return response.data.body.items[0].item;
};

export const getCategorys = async (
  // name,
  kind, // 품목 유형
) => {
  const baseUrl =
    'https://apis.data.go.kr/B553748/CertImgListServiceV2/getCertImgListServiceV2';

  let paramKind = '';

  if (kind) {
    paramKind = `&prdkind=${encodeURIComponent(kind)}`;
  }

  const response = await axios.get(
    `${baseUrl}?ServiceKey=${process.env.REACT_APP_SERVICE_KEY_DECODED}}&returnType=json${paramKind}`,
  );
  console.log('bye');
  console.log(
    `${baseUrl}?ServiceKey=${process.env.REACT_APP_SERVICE_KEY_DECODED}&returnType=json${paramKind}`,
  );
  console.log('plz', response.data.body);

  return response.data.body;
};

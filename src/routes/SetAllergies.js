import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import theme from "../theme";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { allergiesRecoil } from "../store/atom";
import { useEffect } from "react";

const Page = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const Steps = styled.div`
  display: flex;
  margin-top: 100px;
`;

const Step = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.backgroundColor || theme.palette.mono.mono4};
  margin-right: 5px;
`;

const Container = styled.div`
  max-width: 320px;
  min-width: 320px;
`;

const Title = styled.div`
  margin-top: 200px;
  font-size: 20px;
  color: ${theme.palette.mono.mono8};
  font-weight: bold;
  margin-bottom: 10px;
`;
const SubTitle = styled.div`
  font-size: 14px;
  color: ${theme.palette.mono.mono6};
  margin-bottom: 30px;
`;

export default function SetAllergies() {
  const setAllergies = useSetRecoilState(allergiesRecoil);

  return (
    <>
      <Page>
        <Steps>
          <Step backgroundColor={theme.palette.subRed.main} />
          <Step />
        </Steps>
        <Container>
          <Title> 알레르기 반응이 있는 식품을 알려주세요 </Title>
          <SubTitle> ex) 복숭아, 호두, 갑각류 등 </SubTitle>
          <Autocomplete
            multiple
            id="tags-standard"
            options={options}
            getOptionLabel={(option) => option.name}
            onChange={(event, newValue) => {
              setAllergies(newValue.map((option) => option.name));
            }}
            renderInput={(params) => (
              <TextField {...params} variant="standard" />
            )}
          />
        </Container>

        <Link to="/set/setSpecial">
          <Button
            style={{
              position: "absolute",
              bottom: "20px",
              right: "30px",
              width: "150px",
              height: "56px",
            }}
            variant="outlined"
          >
            NEXT
          </Button>
        </Link>
      </Page>
    </>
  );
}

export const options = [
  {
    id: 1,
    name: "견과류",
  },
  {
    id: 2,
    name: "오징어",
  },
  // {
  //   id: 3,
  //   name: "토끼고기",
  // },
  {
    id: 4,
    name: "보리",
  },
  {
    id: 5,
    name: "셀러리",
  },
  {
    id: 6,
    name: "아스파라거스",
  },
  {
    id: 7,
    name: "브로콜리",
  },
  {
    id: 8,
    name: "콜리플라워",
  },
  {
    id: 9,
    name: "식초",
  },
  {
    id: 10,
    name: "꿀",
  },
  {
    id: 11,
    name: "카페인",
  },
  {
    id: 12,
    name: "바닐라",
  },
  {
    id: 13,
    name: "딸기",
  },
  {
    id: 14,
    name: "오렌지",
  },
  {
    id: 15,
    name: "레몬",
  },
  {
    id: 16,
    name: "라임",
  },
  {
    id: 17,
    name: "체리",
  },
  {
    id: 18,
    name: "포도",
  },
  {
    id: 19,
    name: "수박",
  },
  {
    id: 20,
    name: "참외",
  },
  {
    id: 21,
    name: "키위",
  },
  {
    id: 22,
    name: "파인애플",
  },
  {
    id: 23,
    name: "망고",
  },
  {
    id: 24,
    name: "코코넛",
  },
  {
    id: 25,
    name: "블루베리",
  },
  {
    id: 26,
    name: "블랙베리",
  },
  {
    id: 27,
    name: "라즈베리",
  },
  {
    id: 28,
    name: "자두",
  },
  {
    id: 29,
    name: "석류",
  },
  {
    id: 30,
    name: "아보카도",
  },
  {
    id: 31,
    name: "감",
  },
  {
    id: 32,
    name: "가지",
  },
  {
    id: 33,
    name: "피망",
  },
  {
    id: 34,
    name: "오이",
  },
  {
    id: 35,
    name: "호박",
  },
  {
    id: 36,
    name: "단호박",
  },
  {
    id: 37,
    name: "콩",
  },
  {
    id: 38,
    name: "렌즈콩",
  },
  {
    id: 39,
    name: "블랙빈",
  },
  {
    id: 40,
    name: "콩나물",
  },
  {
    id: 41,
    name: "두부",
  },
  {
    id: 42,
    name: "미소",
  },
  {
    id: 43,
    name: "라면",
  },
  {
    id: 44,
    name: "햄",
  },
  {
    id: 45,
    name: "소시지",
  },
  {
    id: 46,
    name: "베이컨",
  },
  {
    id: 47,
    name: "비프젤리",
  },
  {
    id: 48,
    name: "콘푸라이트",
  },
  {
    id: 49,
    name: "핫도그",
  },
  {
    id: 50,
    name: "호두",
  },
  {
    id: 51,
    name: "복숭아",
  },
  {
    id: 52,
    name: "갑각류",
  },
  {
    id: 53,
    name: "피클",
  },
  {
    id: 54,
    name: "김치",
  },
  {
    id: 55,
    name: "된장",
  },
  {
    id: 56,
    name: "고추장",
  },
  {
    id: 57,
    name: "누룽지",
  },
  {
    id: 58,
    name: "밤",
  },
  {
    id: 59,
    name: "무화과",
  },
  {
    id: 60,
    name: "헤이즐넛",
  },
  {
    id: 61,
    name: "마카다미아넛",
  },
  {
    id: 62,
    name: "알몬드버터",
  },
  {
    id: 63,
    name: "땅콩버터",
  },
  {
    id: 64,
    name: "토마토소스",
  },
  {
    id: 65,
    name: "소스",
  },
  {
    id: 66,
    name: "마요네즈",
  },
  {
    id: 67,
    name: "케첩",
  },
  {
    id: 68,
    name: "고구마",
  },
  {
    id: 69,
    name: "쿠스쿠스",
  },
  {
    id: 70,
    name: "퀴노아",
  },
  {
    id: 71,
    name: "멜론",
  },
  {
    id: 72,
    name: "오트밀",
  },
  {
    id: 73,
    name: "블루치즈",
  },
  {
    id: 74,
    name: "페타치즈",
  },
  {
    id: 75,
    name: "모짜렐라",
  },
  {
    id: 76,
    name: "요거트",
  },
  {
    id: 77,
    name: "버터",
  },
  {
    id: 78,
    name: "파슬리",
  },
  {
    id: 79,
    name: "로즈마리",
  },
  {
    id: 80,
    name: "바질",
  },
  {
    id: 81,
    name: "딜",
  },
  {
    id: 82,
    name: "녹차",
  },
  {
    id: 83,
    name: "홍차",
  },
  {
    id: 84,
    name: "카페인",
  },
  {
    id: 85,
    name: "와인",
  },
  {
    id: 86,
    name: "맥주",
  },
  {
    id: 87,
    name: "보드카",
  },
  {
    id: 88,
    name: "휘핑크림",
  },
  {
    id: 89,
    name: "자몽",
  },
  {
    id: 90,
    name: "사과",
  },
  {
    id: 91,
    name: "파인넛",
  },
  {
    id: 92,
    name: "피칸",
  },
  {
    id: 93,
    name: "올리브",
  },
  {
    id: 94,
    name: "올리브오일",
  },
  {
    id: 95,
    name: "캔디",
  },
  {
    id: 96,
    name: "젤리",
  },
  {
    id: 97,
    name: "아이스크림",
  },
  {
    id: 98,
    name: "커피",
  },
  {
    id: 99,
    name: "당근",
  },
  {
    id: 100,
    name: "비트",
  },
];

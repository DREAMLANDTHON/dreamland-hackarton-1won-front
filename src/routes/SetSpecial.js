import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import theme from "../theme";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { specialTypesRecoil } from "../store/atom";

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
  font-size: 18px;
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
  const setSpecialTypes = useSetRecoilState(specialTypesRecoil);

  return (
    <>
      <Page>
        <Steps>
          <Step />
          <Step backgroundColor={theme.palette.subRed.main} />
        </Steps>
        <Container>
          <Title> 추구하는 식이법을 알려주세요 </Title>
          <SubTitle> ex) 비건, 할랄, 락토프리, 글루텐 프리 등 </SubTitle>
          <Autocomplete
            multiple
            id="tags-standard"
            options={options}
            getOptionLabel={(option) => option.name}
            onChange={(event, newValue) => {
              setSpecialTypes(newValue.map((option) => option.name));
            }}
            renderInput={(params) => (
              <TextField {...params} variant="standard" />
            )}
          />
        </Container>

        <Link to="/set/setFinish">
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
const options = [
  { id: 1, name: "할랄" },
  { id: 2, name: "비건" },
  { id: 3, name: "코셔" },
  { id: 4, name: "글루텐-프리" },
  { id: 5, name: "야채주의자" },
  { id: 6, name: "팔레오" },
  { id: 7, name: "케토" },
  { id: 8, name: "로카르니보어" },
  { id: 9, name: "오보-라크토-야채주의자" },
  { id: 10, name: "락토-야채주의자" },
  { id: 11, name: "오보-야채주의자" },
  { id: 12, name: "페스카테리언" },
  { id: 13, name: "플렉시테리언" },
  { id: 14, name: "폴로-야채주의자" },
  { id: 15, name: "락토-오보-야채주의자" },
  { id: 16, name: "세미-야채주의자" },
  { id: 17, name: "디미-야채주의자" },
  { id: 18, name: "비건티시즘" },
  { id: 19, name: "마크로비오틱" },
  { id: 20, name: "누티테리언" },
  { id: 21, name: "공기 채식주의자" },
  { id: 22, name: "프루이테리언" },
  { id: 23, name: "주스 채식주의자" },
  { id: 24, name: "스프루팅 채식주의자" },
  { id: 25, name: "생식주의자" },
];

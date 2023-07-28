import styled from "styled-components";
import theme from "../theme";
import { Button } from "@mui/material";
import CheckImg from "../imgs/check.png";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import {
  allergiesRecoil,
  specialTypesRecoil,
  userInfoRecoil,
} from "../store/atom";
import { addtionalSignUp } from "../apis/member";

// const Allergies = [
//   { id: 0, name: '돼지고기' },
//   { id: 1, name: '복숭아' },
//   { id: 2, name: '땅콩' },
// ];

// const Specials = [
//   { id: 0, name: '락토프리' },
//   { id: 1, name: '글리텐 프리' },
//   { id: 2, name: '할랄' },
//   { id: 3, name: '비건' },
// ];

const Page = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Img = styled.img`
  height: 50px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 320px;
  min-width: 320px;
  height: 200px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 320px;
  min-width: 320px;
  height: 150px;
`;
const Content = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const Title = styled.div`
  margin-top: 40px;
  font-size: 24px;
  color: ${theme.palette.mono.mono8};
  font-weight: bold;
  margin-bottom: 10px;
  line-height: 1.4;
`;
const SubTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: ${theme.palette.mono.mono6};
  margin-bottom: 30px;
`;
const ContentButton = styled.div`
  width: fit-content;
  padding: 7px 18px;
  border-radius: 20px;
  color: ${theme.palette.mono.mono8};
  border: 1px solid ${theme.palette.mono.mono8};
`;

export default function SetFinish() {
  const allergies = useRecoilValue(allergiesRecoil);
  const specialTypes = useRecoilValue(specialTypesRecoil);
  const userInfo = useRecoilValue(userInfoRecoil);
  const handleClick = () => {
    // const newData = {
    //   id: "1239",
    //   allergies: ["복숭아", "포도"],
    //   specialTypes: ["천식", "감기"],
    // };
    // const newData = {
    //   id: userInfo.id,
    //   allergies: allergies,
    //   specialTypes: specialTypes,
    // };
    // console.log(newData, typeof newData);
    addtionalSignUp({
      id: +userInfo.id,
      allergies: allergies,
      specialTypes: specialTypes,
    }).then((res) => {
      console.log(res.data);
    });

    // console.log(newData);
    // addtionalSignUp({
    //   id: userInfo.id,
    //   allergies: allergies,
    //   specialTypes: specialTypes,
    // }).then((res) => {
    //   console.log(res.data);
    // });
  };
  return (
    <>
      <Page>
        <Container>
          <Img src={CheckImg} />
          <Title>
            식이 정보 <br />
            입력 완료
          </Title>
        </Container>

        <ContentContainer>
          <SubTitle> 알레르기 성분 </SubTitle>
          <Content>
            {allergies?.map((All) => (
              <ContentButton> {All} </ContentButton>
            ))}
          </Content>
        </ContentContainer>
        <ContentContainer>
          <SubTitle> 특이 성분 </SubTitle>
          <Content>
            {specialTypes?.map((spe) => (
              <ContentButton> {spe} </ContentButton>
            ))}
          </Content>
        </ContentContainer>

        <Link to="/">
          <Button
            style={{
              position: "absolute",
              bottom: "20px",
              right: "30px",
              width: "80%",
              height: "56px",
            }}
            variant="contained"
            onClick={handleClick}
          >
            OKAY
          </Button>
        </Link>
      </Page>
    </>
  );
}

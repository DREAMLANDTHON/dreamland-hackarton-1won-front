import styled from 'styled-components';
import theme from '../theme';
import { Button } from '@mui/material';
import CheckImg from '../imgs/check.png';
import { Link } from 'react-router-dom';

const Allergies = [
  { id: 0, name: '돼지고기' },
  { id: 1, name: '복숭아' },
  { id: 2, name: '땅콩' },
];

const Specials = [
  { id: 0, name: '락토프리' },
  { id: 1, name: '글리텐 프리' },
  { id: 2, name: '할랄' },
  { id: 3, name: '비건' },
];

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
            {Allergies?.map((All) => (
              <ContentButton> {All.name} </ContentButton>
            ))}
          </Content>
        </ContentContainer>
        <ContentContainer>
          <SubTitle> 특이 성분 </SubTitle>
          <Content>
            {Specials?.map((spe) => (
              <ContentButton> {spe.name} </ContentButton>
            ))}
          </Content>
        </ContentContainer>

        <Link to="/">
          <Button
            style={{
              position: 'absolute',
              bottom: '20px',
              right: '30px',
              width: '80%',
              height: '56px',
            }}
            variant="contained"
          >
            OKAY
          </Button>
        </Link>
      </Page>
    </>
  );
}

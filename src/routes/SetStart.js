import styled from 'styled-components';
import theme from '../theme';
import { Button } from '@mui/material';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

const Page = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 85vh;
`;

const Container = styled.div`
  max-width: 320px;
  min-width: 320px;
  width: 300px;
  /* border: 1px solid ${theme.palette.mono.mono4}; */
`;

const Title = styled.div`
  font-size: 20px;
  color: ${theme.palette.mono.mono8};
  font-weight: bold;
  margin-bottom: 30px;
`;
const SubTitle = styled.div`
  font-size: 14px;
  color: ${theme.palette.mono.mono6};
  margin-bottom: 30px;
`;

export default function SetStart() {
  return (
    <>
      <Header />
      <Page>
        <Container>
          <Title>
            알레르기가 있는 특정 식품과 <br />
            추구하는 식습관에 대해 알고 싶어요!
          </Title>
          <SubTitle>
            잇테이블은 고객님의 식이 정보에 기반하여 <br />
            맞춤형 식품을 선별하고 추천드려요
          </SubTitle>
        </Container>
        <div />

        <Link to="/set/setAllergies">
          <Button
            style={{
              position: 'absolute',
              bottom: '20px',
              right: '0px',
              width: '150px',
              height: '56px',
              fontSize: '24px',
            }}
            variant="text"
          >
            Go <ArrowForwardIosRoundedIcon />
          </Button>
        </Link>
      </Page>
    </>
  );
}

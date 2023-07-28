import styled from 'styled-components';
import user from '../imgs/User.png';
import { useLocation } from 'react-router-dom';
// import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import WholeCookie from '../imgs/whoie_cookie.png';
// import Bread from '../imgs/bread.png';
// import Noodles from '../imgs/noodles.png';
// import Drink from '../imgs/drink.png';
import theme from '../theme';
import Header from '../components/Header';
import { useQuery } from 'react-query';
import { getCategorys } from '../apis/food';

const products = [
  {
    name: '고래밥',
    img: 'https://image.homeplus.kr/td/efa1a935-1101-472f-b554-4feae2014745',
  },
  {
    name: '고래밥',
    img: 'https://image.homeplus.kr/td/efa1a935-1101-472f-b554-4feae2014745',
  },
  {
    name: '고래밥',
    img: 'https://image.homeplus.kr/td/efa1a935-1101-472f-b554-4feae2014745',
  },
  {
    name: '고래밥',
    img: 'https://image.homeplus.kr/td/efa1a935-1101-472f-b554-4feae2014745',
  },
];

const Page = styled.div`
  background-color: black;
  height: 100%;
  display: flex;
  justify-content: center;
  overflow-y: auto;
`;

const Head = styled.div`
  display: flex;
  height: 10vh;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: black;
`;

const Img = styled.img`
  width: 30px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: start;
  align-items: start;
  height: 90vh;
  max-width: 320px;
  min-width: 320px;
`;
const TitleGrids = styled.div`
  display: flex;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 15px;
  /* border: 1px solid red; */
  margin-top: 20px;
`;

const Logo = styled.img`
  width: 50px;
`;

const Title = styled.div`
  color: white;
  font-weight: bold;
  font-size: 28px;
  margin-bottom: 10px;
`;
const SubTitle = styled.div`
  color: white;
  font-size: 18px;
`;

const Text = styled.div`
  color: white;
  font-size: 20px;
  font-weight: 500;
  margin: 20px;
`;

const ItemContainer = styled.div`
  margin-bottom: 20px;
`;

const Grids = styled.div`
  display: flex;
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* border: 1px solid blue; */
  min-width: 320px;
  justify-items: center;
  gap: 30px;
`;

const Card = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 170px;
  justify-content: space-between;
`;

const RecommGrids = styled(Grids)`
  justify-items: end;
`;

const ProductImg = styled.img`
  border-radius: 15px;
  width: 150px;
`;
const ProductName = styled.div`
  margin-top: 10px;
  font-size: 18px;
`;

const RedBackground = styled.div`
  background-color: ${theme.palette.primary.main};
  width: 130px; /* Adjust the width as needed */
  height: 130px; /* Adjust the height as needed */
  position: relative;
  border-radius: 15px;
`;

const ProductRecommImg = styled.img`
  border-radius: 15px;
  width: 130px;
  position: absolute;
  top: 10%;
  right: 10%;
  z-index: 1;
`;
export default function CateListSnack() {
  const { isLoading, data: info } = useQuery(
    ['CateData'],
    () => getCategorys('빙과'),
    {
      onSuccess: (data) => {
        console.log('Category data:', data);
      },
    },
  );
  return (
    <>
      <Header
        backgroundColor={theme.palette.mono.black}
        backDisplay="block"
        logoDisplay="none"
      />
      <Page>
        <Container>
          <TitleGrids>
            <Logo src={WholeCookie} alt="img" />
            <div>
              <Title>Snack</Title>
              <SubTitle>과자</SubTitle>
            </div>
          </TitleGrids>
          <ItemContainer>
            <Text>글루텐 프리 인기 상품</Text>
            <RecommGrids>
              {products.slice(0, 2).map((item) => (
                <Card>
                  <div>
                    <RedBackground>
                      <ProductRecommImg src={item.img} />
                    </RedBackground>
                  </div>
                  <ProductName>{item.name}</ProductName>
                </Card>
              ))}
            </RecommGrids>
          </ItemContainer>
          <ItemContainer>
            <Text>우유 알레르기 대체 상품</Text>
            <Grids>
              {products.map((item) => (
                <Card>
                  <ProductImg src={item.img} />
                  <ProductName>{item.name}</ProductName>
                </Card>
              ))}
            </Grids>
            <div style={{ height: '200px' }} />
          </ItemContainer>
        </Container>
      </Page>
    </>
  );
}

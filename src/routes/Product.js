import styled from 'styled-components';
import Header from '../components/Header';
import theme from '../theme';
import Logo_White from '../imgs/Logo_White.png';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import Spoon from '../imgs/Spoon.png';
import CanEat from '../imgs/CanEat.png';
import Saved from '../imgs/Saved.png';

const products = {
  img: 'https://image.homeplus.kr/td/efa1a935-1101-472f-b554-4feae2014745',
  name: '고래밥 볶음양념맛',
  type: '과자(유처리제품)',
  allergy: ['땅콩', '대두', '밀', '돼지고기', '복숭아'],
  ingredients: [
    '밀가루',
    '알파옥수수분말',
    '변성전분',
    '식물성유지1',
    '볶음양념맛시즈닝',
    '식물성유지2',
    '갈색설탕',
    '백설탕',
    '유단백혼합분말',
    '전분',
    '바베큐양념페이스트',
    '혼합치즈분말',
    '패각칼슘',
    '식염',
    '산도조절제',
    '유화제',
  ],
};

const myAllergies = ['대두', '밀'];

const Page = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 90vh;
  max-width: 390px;
`;

const ProductImg = styled.img`
  width: 200px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  width: 100px;
`;
const SavedImg = styled.img`
  width: 70px;
  margin-left: 10px;
`;

const Slide = styled.div`
  padding: 30px;
  border-radius: 25px 25px 0 0;
  width: 90%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.palette.mono.mono8};
`;

const Grids = styled.div`
  min-width: 320px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 5px;
`;

const Value = styled.div`
  font-size: 16px;
  color: ${theme.palette.mono.mono2};
`;
const Item = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 16px;
  color: ${theme.palette.mono.mono2};
  font-weight: bold;
`;

const Alert = styled.div`
  display: flex;
  gap: 10px;
  width: 320px;
  height: 50px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;
  margin: 30px 0;
  color: white;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.backgroundColor || null};
  border: 3px solid ${theme.palette.primary.main};
`;

const Container = styled.div`
  max-width: 330px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 40px;
`;

const Allergy = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.color || theme.palette.mono.mono1};
`;

const Ingredients = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Ingredient = styled.div`
  font-size: 14px;
  font-weight: 100;
  color: ${theme.palette.mono.mono1};
`;

const Divider = styled.div`
  margin: 20px 0;
  display: flex;
  gap: 10px;
  height: 2px;
`;

const Div = styled.div`
  height: 100%;
  width: 10px;
  background-color: ${theme.palette.mono.mono2};
`;

export default function Product() {
  let isOk = false;
  let isSaved = false;
  return (
    <>
      <Header />
      <Page>
        <ProductImg src={products.img} />

        <Slide>
          <Grids>
            <Title>
              <Img src={Logo_White} />
              <Divider>
                {['', '', '', '', '', '', '', '', '', '', '', ''].map(
                  (item) => (
                    <Div />
                  ),
                )}
              </Divider>
            </Title>
            {isSaved ? <SavedImg src={Saved} /> : <SavedImg src={CanEat} />}
          </Grids>

          <div>
            <Grids>
              <Value>제품명</Value>
              <Item> {products.name} </Item>
            </Grids>
            <Grids>
              <Value>식품유형</Value>
              <Item> {products.type} </Item>
            </Grids>
          </div>

          {isOk ? (
            <Alert backgroundColor={theme.palette.primary.main}>
              <WarningRoundedIcon color="mono" />
              알레르기 주의 성분이 포함되어 있어요
            </Alert>
          ) : (
            <Alert>
              <img src={Spoon} style={{ width: 20 }} alt="spoon" />
              안심하고 먹을 수 있어요
            </Alert>
          )}

          <Container>
            {products.allergy.map((allergy) =>
              myAllergies.includes(allergy) ? (
                <Allergy color={theme.palette.subRed.main}>{allergy},</Allergy>
              ) : (
                <Allergy> {allergy}, </Allergy>
              ),
            )}
          </Container>

          <Ingredients>
            <Value>원재료정보</Value>
            <Container>
              {products.ingredients.map((ingre) => (
                <Ingredient> {ingre}, </Ingredient>
              ))}
            </Container>
          </Ingredients>
        </Slide>
      </Page>
    </>
  );
}

import styled from 'styled-components';
import WholeBread from '../imgs/whole_bread.png';
import theme from '../theme';
import Header from '../components/Header';
import { useQuery } from 'react-query';
import { getCategorys } from '../apis/food';

const Page = styled.div`
  background-color: black;
  height: 100%;
  display: flex;
  justify-content: center;
  overflow-y: auto;
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
  margin-bottom: 30px;
`;

const Grids = styled.div`
  display: flex;
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-width: 320px;
  justify-items: center;
  gap: 30px;
`;

const Card = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 180px;
  justify-content: space-between;
`;

const RecommGrids = styled(Grids)`
  justify-items: end;
`;

const ProductImg = styled.img`
  border-radius: 15px;
  width: 150px;
  height: 150px;
  object-fit: cover; /* Crop the image to cover the container */
  object-position: center;
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
  height: 130px;
  position: absolute;
  top: 10%;
  right: 10%;
  z-index: 1;
  object-fit: cover; /* Crop the image to cover the container */
  object-position: center;
`;

export default function CateListBread() {
  const { isLoading, data: breads } = useQuery(
    ['CateData'],
    () => getCategorys('빵류'),
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
            <Logo src={WholeBread} alt="img" />
            <div>
              <Title>Bread</Title>
              <SubTitle>빵</SubTitle>
            </div>
          </TitleGrids>
          <ItemContainer>
            <Text>글루텐 프리 인기 상품</Text>
            <RecommGrids>
              {breads?.slice(0, 2).map(
                (item) => (
                  console.log(item),
                  (
                    <Card>
                      <div>
                        <RedBackground>
                          <ProductRecommImg src={item.item.imgurl1} />
                        </RedBackground>
                      </div>
                      <ProductName>{item.item.prdlstNm}</ProductName>
                    </Card>
                  )
                ),
              )}
            </RecommGrids>
          </ItemContainer>
          <ItemContainer>
            <Text>락토프리 인기 상품</Text>
            <RecommGrids>
              {breads?.slice(3, 5).map(
                (item) => (
                  console.log(item),
                  (
                    <Card>
                      <div>
                        <RedBackground>
                          <ProductRecommImg src={item.item.imgurl1} />
                        </RedBackground>
                      </div>
                      <ProductName>{item.item.prdlstNm}</ProductName>
                    </Card>
                  )
                ),
              )}
            </RecommGrids>
          </ItemContainer>
          <ItemContainer>
            <Text> 계란 알레르기 대체 상품 </Text>
            <Grids>
              {breads?.slice(6, 10).map(
                (item) => (
                  console.log(item),
                  (
                    <Card>
                      <ProductImg src={item.item.imgurl1} />
                      <ProductName>{item.item.prdlstNm}</ProductName>
                    </Card>
                  )
                ),
              )}
            </Grids>
            <div style={{ height: '200px' }} />
          </ItemContainer>
        </Container>
      </Page>
    </>
  );
}

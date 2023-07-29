import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import theme from '../theme';
import Logo_White from '../imgs/Logo_White.png';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import Spoon from '../imgs/Spoon.png';
import CanEat from '../imgs/CanEat.png';
import Saved from '../imgs/Saved.png';
import { useQuery } from 'react-query';
import { getFood } from '../apis/food';
import { getProfile } from '../apis/member';
import { useParams } from 'react-router-dom';
import { addLike, deleteLikeFetch } from '../apis/like';
import { useRecoilValue } from 'recoil';
import { userInfoRecoil } from '../store/atom';

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
  grid-template-columns: 1fr 2fr;
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
  line-height: 1.4;
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

export default function Product(props) {
  const userInfo = useRecoilValue(userInfoRecoil);

  const params = useParams();
  console.log('useParam', params.productId);

  const { isLoading, data: info } = useQuery(
    ['foodData'],
    () => getFood(params.productId),
    {
      onSuccess: (data) => {
        console.log('Food data:', data);
      },
    },
  );
  const { isLoading: isPro, data: myAllergies } = useQuery(
    ['foodData', userInfo.id],
    () => getProfile(userInfo.id),
    {
      onSuccess: (data) => {
        console.log('profile :', data);
      },
    },
  );

  const allergyArray = info?.allergy.split(', ');
  const rawmtrlArray = info?.rawmtrl.split(', ');

  const isAllergic = allergyArray?.some((allergy) =>
    myAllergies?.allergies.some((item) => item.name === allergy),
  );

  const [isSaved, setIsSaved] = useState(false);
  const nameObject = {
    name: info?.prdlstNm,
  };
  const toggleSaved = () => {
    setIsSaved((prevIsSaved) => !prevIsSaved);
    isSaved === false
      ? addLike(userInfo.id, nameObject).then((res) =>
          console.log('debug', res.data),
        )
      : deleteLikeFetch(userInfo.id, nameObject).then((res) =>
          console.log('debug', res),
        );
  };

  return (
    <>
      <Header />
      <Page>
        <ProductImg src={info?.imgurl1} />

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
            <SavedImg
              src={isSaved ? Saved : CanEat}
              alt={isSaved ? 'Saved' : 'CanEat'}
              onClick={toggleSaved}
            />
          </Grids>

          <div>
            <Grids>
              <Value>제품명</Value>
              <Item> {info?.prdlstNm} </Item>
            </Grids>
            <Grids>
              <Value>식품유형</Value>
              <Item> {info?.prdkind} </Item>
            </Grids>
          </div>

          {isAllergic ? (
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
            {allergyArray?.map((allergy) => {
              const isAllergic = myAllergies.allergies.some(
                (item) => item.name === allergy,
              );
              return (
                <Allergy
                  key={allergy}
                  color={isAllergic ? theme.palette.subRed.main : undefined}
                >
                  {allergy},
                </Allergy>
              );
            })}
          </Container>

          <Ingredients>
            <Value>원재료정보</Value>
            <Container>
              {rawmtrlArray?.map((ingre) => (
                <Ingredient> {ingre}, </Ingredient>
              ))}
            </Container>
          </Ingredients>
        </Slide>
      </Page>
    </>
  );
}

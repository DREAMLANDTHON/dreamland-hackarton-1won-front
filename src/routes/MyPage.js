import styled from 'styled-components';
import Dot from '../imgs/Dot.png';
import Bread from '../imgs/bread.png';
import Noodles from '../imgs/noodles.png';
import Drink from '../imgs/drink.png';
import theme from '../theme';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import App from '../App';
import { addtionalSignUp, firstSignUp, getProfile } from '../apis/member';
import { useEffect } from 'react';
import { addLike, deleteLike, deleteLikeFetch } from '../apis/like';
import { useQuery } from 'react-query';

const allergy = [
  { name: '땅콩' },
  { name: '대두' },
  { name: '밀' },
  { name: '돼지고기' },
  { name: '복숭아' },
];

const MyBowl = [
  { name: '고래밥' },
  { name: '착한양파 감자스틱' },
  { name: '양파국수' },
  { name: '아몬드 브리즈' },
  { name: '잇츠베러 티 쿠키 더블초코' },
];

const Container = styled.div`
  min-width: 390px;
  max-width: 360px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;
  height: 90vh;

  /* background-color: ${theme.palette.mono.black}; */
`;

const Ment = styled.div`
  min-width: 360px;
  display: flex;
  line-height: 1.4;
  margin-bottom: 30px;
`;

const Title = styled.div`
  display: flex;
  font-size: ${(props) => props.fontSize || '28px'};
  font-weight: bold;
  /* color: ${(props) => props.color || 'white'}; */
  margin-bottom: 10px;
`;
const SubTitle = styled.div`
  display: flex;
  font-size: 18px;
  color: ${(props) => props.color || 'white'};
`;
const Img = styled.img`
  /* position: absolute;
  right: 0%;
  bottom: 0%; */
  width: 20px;
`;

const Box = styled.div`
  font-size: 18px;
  max-width: 360px;
  margin-bottom: 30px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 10px;
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const Contents = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid ${theme.palette.mono.mono5};
  border-radius: 20px;
  width: 360px;
  height: 200px;
  overflow-y: auto; /* 스크롤 표시 (필요한 경우) */
  align-content: flex-start;
  gap: 15px;
  padding: 20px;
`;

const ContentButton = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  height: 30px;
  padding: 7px 18px;
  border-radius: 20px;
  color: ${theme.palette.mono.mono8};
  border: 1px solid ${theme.palette.mono.mono8};
`;

export default function MyPage() {
  // useEffect(() => {
  //   const newData = {
  //     id: 1239,
  //     name: 'test',
  //     email: 'test@test.com',
  //   };
  //   firstSignUp(newData).then((res) => {
  //     console.log(res.data);
  //   });
  // }, []);

  // useEffect(() => {
  //   const newData = {
  //     id: 1239,
  //     allergies: ['복숭아', '포도'],
  //     specialTypes: ['천식', '감기'],
  //   };
  //   addtionalSignUp(newData).then((res) => {
  //     console.log(res.data);
  //   });
  // }, []);

  // useEffect(() => {
  //   const getProf = async () => {
  //     const id = 1239;
  //     const data = await getProfile(id);
  //     console.log(data);
  //   };
  //   getProf();
  // }, []);

  const { isLoading, data: myInfo } = useQuery(
    [],
    async () => getProfile(1239),
    {
      onSuccess: (data) => {
        console.log('Funding data:', data, myInfo);
      },
    },
  );

  // useEffect(() => {
  //   const name = { name: '포' };
  //   const user_id = 1239;
  //   addLike(1239, name).then((res) => console.log('debug', res.data));
  // }, []);

  // useEffect(() => {
  //   const name = { name: '포' };
  //   const user_id = 1239;
  //   deleteLikeFetch(user_id, name).then((res) => console.log('debug', res));
  // }, []);

  return (
    <>
      <Header userDisplay="none" />
      <Container>
        <Ment>
          <Title fontSize="22px">
            혜림님
            <br /> 오늘도 안심하고 드세요!
          </Title>
        </Ment>
        <Box>
          <Text>
            <Img src={Dot} />
            <Name>내 알러지 & 식이 정보</Name>
          </Text>

          <Contents>
            {myInfo?.allergies.map((item) => (
              // console.log(item.name),
              <ContentButton> {item.name} </ContentButton>
            ))}
            {myInfo?.specialTypes.map((item) => (
              // console.log(item.name),
              <ContentButton> {item.name} </ContentButton>
            ))}
          </Contents>
        </Box>
        <Box>
          <Text>
            <Img src={Dot} />
            <Name> 저장한 그릇 </Name>
          </Text>

          <Contents>
            {myInfo?.canEats.map(
              (item) => (
                console.log(item.name),
                (<ContentButton> {item.name} </ContentButton>)
              ),
            )}
          </Contents>
        </Box>

        {/* <Link to="/set">
          <Item backgroundColor={theme.palette.mono.mono2}>
            <Title
              color={theme.palette.mono.mono8}
              style={{ justifyContent: 'flex-end' }}
            >
              Drink
            </Title>
            <SubTitle
              color={theme.palette.mono.mono8}
              style={{ justifyContent: 'flex-end' }}
            >
              음료
            </SubTitle>
            <Img style={{ left: '0%' }} src={Drink} />
          </Item>
        </Link> */}
      </Container>
    </>
  );
}

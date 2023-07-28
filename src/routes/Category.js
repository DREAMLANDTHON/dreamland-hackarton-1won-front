import styled from 'styled-components';
import Cookie from '../imgs/Cookie.png';
import Bread from '../imgs/bread.png';
import Noodles from '../imgs/noodles.png';
import Drink from '../imgs/drink.png';
import theme from '../theme';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;
  height: 90vh;

  background-color: ${theme.palette.mono.black};
`;

const Item = styled.div`
  position: relative;
  max-width: 370px;
  min-width: 370px;
  height: 150px;
  background-color: ${(props) => props.backgroundColor || '#1B1B1B'};
  padding: 20px;
  border-radius: 14px;
`;

const Ment = styled.div`
  min-width: 370px;
  display: flex;
`;

const Title = styled.div`
  display: flex;
  font-size: ${(props) => props.fontSize || '28px'};
  font-weight: bold;
  color: ${(props) => props.color || 'white'};
  margin-bottom: 10px;
`;
const SubTitle = styled.div`
  display: flex;
  font-size: 18px;
  color: ${(props) => props.color || 'white'};
`;
const Img = styled.img`
  position: absolute;
  right: 0%;
  bottom: 0%;
  width: 100px;
`;

export default function Category() {
  return (
    <>
      <Header backgroundColor={theme.palette.mono.black} />
      <Container>
        <Ment>
          <Title fontSize="22px">
            안전하고 맛있게 먹을 수 있는
            <br /> 맞춤형 식품을 추천해줄게요!
          </Title>
        </Ment>
        <Link
          to={{
            pathname: '/category/1',
            state: {
              title: 'Snack',
              SubTitle: '과자',
              img: 'Cookie',
            },
          }}
        >
          <Item>
            <Title>Snack</Title>
            <SubTitle>과자</SubTitle>
            <Img src={Cookie} />
          </Item>
        </Link>
        <Link to="/set">
          <Item>
            <Title style={{ justifyContent: 'flex-end' }}>Bread</Title>
            <SubTitle style={{ justifyContent: 'flex-end' }}>빵</SubTitle>
            <Img style={{ left: '0%' }} src={Bread} />
          </Item>
        </Link>
        <Link to="/set">
          <Item backgroundColor="#454443">
            <Title>Noodles</Title>
            <SubTitle>면</SubTitle>
            <Img src={Noodles} />
          </Item>
        </Link>
        <Link to="/set">
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
        </Link>
      </Container>
    </>
  );
}

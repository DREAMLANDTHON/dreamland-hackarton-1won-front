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
const Title = styled.div`
  display: flex;
  font-size: 28px;
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
      <Header />
      <Container>
        <Link to="/set">
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

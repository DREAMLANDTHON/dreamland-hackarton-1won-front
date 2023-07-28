import styled from 'styled-components';
import logo from '../imgs/Logo.png';
import user from '../imgs/User.png';

const Head = styled.div`
  display: flex;
  height: 10vh;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const Img = styled.img`
  /* margin: 30px; */
  width: 30px;
`;

export default function Header() {
  return (
    <>
      <Head>
        <Img src={logo} alt="logo" />
        <img style={{ width: '30px', height: '30px' }} src={user} alt="user" />
      </Head>
    </>
  );
}

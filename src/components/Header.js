import styled from 'styled-components';
import logo from '../imgs/Logo.png';
import user from '../imgs/User.png';

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px;
`;

const Img = styled.img`
  /* margin: 30px; */
  width: 45px;
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

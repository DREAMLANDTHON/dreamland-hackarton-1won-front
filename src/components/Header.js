import styled from 'styled-components';
import logo from '../imgs/Logo.png';

const Logo = styled.img`
  margin: 30px;
  width: 45px;
`;

export default function Header() {
  return (
    <>
      <Logo src={logo} alt="logo" />
    </>
  );
}

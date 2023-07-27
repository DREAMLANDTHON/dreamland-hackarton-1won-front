import styled from 'styled-components';
import theme from '../theme';

const Button = styled.button`
  background-color: ${theme.palette.primary.main};
`;

export default function Home() {
  return (
    <>
      <div> Home Page </div>
      <Button>버튼</Button>
    </>
  );
}

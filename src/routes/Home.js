import styled from 'styled-components';
// import theme from '../theme';

// const Button = styled.button`
//   background-color: ${theme.palette.primary.main};
// `;

const Page = styled.div`
  display: flex;
  justify-content: center;
  background-color: lightgray;
`;

const Center = styled.div`
  min-width: 500px;
  height: 100vh;
  background-color: lightpink;
`;

export default function Home() {
  return (
    <Page>
      <Center>
        <div>Heello</div>
      </Center>
    </Page>
  );
}

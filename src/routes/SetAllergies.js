import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import theme from '../theme';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Page = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const Steps = styled.div`
  display: flex;
  margin-top: 100px;
`;

const Step = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.backgroundColor || theme.palette.mono.mono4};
  margin-right: 5px;
`;

const Container = styled.div`
  max-width: 320px;
  min-width: 320px;
`;

const Title = styled.div`
  margin-top: 200px;
  font-size: 20px;
  color: ${theme.palette.mono.mono8};
  font-weight: bold;
  margin-bottom: 10px;
`;
const SubTitle = styled.div`
  font-size: 14px;
  color: ${theme.palette.mono.mono6};
  margin-bottom: 30px;
`;

export default function SetAllergies() {
  return (
    <>
      <Page>
        <Steps>
          <Step backgroundColor={theme.palette.subRed.main} />
          <Step />
        </Steps>
        <Container>
          <Title> 알레르기 반응이 있는 식품을 알려주세요 </Title>
          <SubTitle> ex) 복숭아, 호두, 갑각류 등 </SubTitle>
          <Autocomplete
            multiple
            id="tags-standard"
            options={allergies}
            getOptionLabel={(option) => option.name}
            // defaultValue={}
            renderInput={(params) => (
              <TextField {...params} variant="standard" />
            )}
          />
        </Container>

        <Link to="/set/setSpecial">
          <Button
            style={{
              position: 'absolute',
              bottom: '20px',
              right: '30px',
              width: '150px',
              height: '56px',
            }}
            variant="outlined"
          >
            NEXT
          </Button>
        </Link>
      </Page>
    </>
  );
}

export const allergies = [
  {
    id: 1,
    name: '밀',
  },
  {
    id: 2,
    name: '대두',
  },
  {
    id: 3,
    name: '호두',
  },
  {
    id: 4,
    name: '난류',
  },
  {
    id: 5,
    name: '새우',
  },
  {
    id: 6,
    name: '땅콩',
  },
  {
    id: 7,
    name: '쇠고기',
  },
  {
    id: 8,
    name: '토마토',
  },
  {
    id: 9,
    name: '게',
  },
  {
    id: 10,
    name: '우유',
  },
  {
    id: 11,
    name: '닭고기',
  },
  {
    id: 12,
    name: '돼지고기',
  },
  {
    id: 13,
    name: '조개류',
  },
  {
    id: 14,
    name: '복숭아',
  },
  {
    id: 15,
    name: '아황산류',
  },
];

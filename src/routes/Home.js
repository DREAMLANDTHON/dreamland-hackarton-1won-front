import style from 'styled-components';
import titleImg from '../imgs/titleImg.png';
import theme from '../theme';

import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import Header from '../components/Header';

const Container = style.div`
  display: flex;
  justify-content: center;
`;

const Title = style.img`
  position: absolute;
  top: 30%;
`;

const Search = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '35%',
  border: `1px solid ${theme.palette.subRed.main}`,
  borderRadius: theme.shape.borderRadius,
  marginLeft: 0,
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const CameraIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  right: '0%',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '25ch',
    },
  },
}));

const CategoryButton = style.button`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translateX(-50%);
  width: 220px;
  height:35px;
  border: none;
  border-radius: 25px;
  background-color: ${theme.palette.mono.mono3};
  color: ${theme.palette.mono.mono8};
`;

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <Title src={titleImg} />
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <CameraIconWrapper>
            <CameraAltIcon />
          </CameraIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <Link to="/Category">
          <CategoryButton>나의 맞춤형 식품 찾아보기</CategoryButton>
        </Link>
      </Container>
    </>
  );
}

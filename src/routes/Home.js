import style from 'styled-components';
import titleImg from '../imgs/titleImg.png';
import theme from '../theme';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../components/Header';
import backgroundImg from '../imgs/Background.png';

const Container = style.div`
  display: flex;
  justify-content: center;
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
  min-height: 90vh; 
`;

const Title = style.img`
  position: absolute;
  top: 40%;
`;

const Search = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '45%',
  border: `1px solid ${theme.palette.mono.mono1}`,
  borderRadius: theme.shape.borderRadius,
  marginLeft: 0,
  display: 'flex',
  alignItems: 'center',
  width: '90%',
  maxWidth: `${390 * 0.9}px`,
  height: '56px',
  backgroundColor: `rgba(255, 255, 255, 0.5)`,
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
  top: 55%;
  left: 50%;
  transform: translateX(-50%);
  width: 220px;
  height:35px;
  border: none;
  border-radius: 25px;
  background-color: rgba(255, 255, 255, 0.8);
  color: ${theme.palette.mono.mono8};
`;

export default function Home() {
  const [searchText, setSearchText] = useState('');
  const history = useHistory();

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      // Enter 키를 누르면 Product 페이지로 이동하면서 URL 파라미터로 searchText 값을 전달
      history.push(`/Product/${searchText}`);
    }
  };

  return (
    <>
      <Header backgroundColor={theme.palette.mono.black} />
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
            inputProps={{ 'aria-label': 'search' }}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </Search>
        <Link to="/Category">
          <CategoryButton>나의 맞춤형 식품 찾아보기</CategoryButton>
        </Link>
      </Container>
    </>
  );
}

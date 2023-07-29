import styled from 'styled-components';
import logo from '../imgs/Logo.png';
import user from '../imgs/User.png';
import { Link, useHistory } from 'react-router-dom';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import GoogleLogin from './auth/GoogleButton';
import { Box, Button } from '@mui/material';
import { useRecoilState } from 'recoil';
import { userInfoRecoil } from '../store/atom';

const Head = styled.div`
  display: flex;
  height: 10vh;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: ${(props) => props.backgroundColor || '#ffffff'};
`;

const Img = styled.img`
  /* margin: 30px; */
  width: 30px;
`;

const BackButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

export default function Header(props) {
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  const [userInfoState, setUserInfoState] = useRecoilState(userInfoRecoil);

  const handleClick = () => {
    setUserInfoState(null);
    history.push('/');
  };

  return (
    <>
      <Head backgroundColor={props.backgroundColor}>
        {props.logoDisplay === 'none' ? (
          <BackButton onClick={handleGoBack}>
            <ArrowBackIosNewRoundedIcon color="mono" />
          </BackButton>
        ) : (
          <Link to="/">
            <Img src={logo} alt="logo" />
          </Link>
        )}
        <Box sx={{ display: 'flex', gap: '20px' }}>
          {userInfoState === null ? (
            (console.log('로그인 안됨'), (<GoogleLogin />))
          ) : (
            <Button
              onClick={handleClick}
              variant="text"
              color="warning"
              sx={{ px: '0', py: '0', fontSize: '13px' }}
            >
              로그아웃
            </Button>
          )}
          <Link to="/MyPage">
            <Img style={{ display: props.userDisplay }} src={user} alt="user" />
          </Link>
        </Box>
      </Head>
    </>
  );
}

import styled from 'styled-components';
import logo from '../imgs/Logo.png';
import user from '../imgs/User.png';
import { Link, useHistory } from 'react-router-dom';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';

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

        <Link to="/MyPage">
          <Img style={{ display: props.userDisplay }} src={user} alt="user" />
        </Link>
      </Head>
    </>
  );
}

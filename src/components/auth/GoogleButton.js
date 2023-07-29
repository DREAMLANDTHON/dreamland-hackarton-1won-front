// GoogleButton.js

import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import React, { useRef } from 'react';
// import { userLogin, userSignup } from "../apis/users";
import { useSetRecoilState } from 'recoil';
import { userInfoRecoil } from '../../store/atom';
import {
  isLoginState,
  isRegisterModalState,
  userLoginInfo,
} from '../../store/atom';
import { firstSignUp } from '../../apis/member';
import { useHistory } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";

// const clientId = "425799046707-34ek2gt3b287jdl3knk9ib796l998trt.apps.googleusercontent.com";

export default function GoogleButton() {
  const history = useHistory();
  const setUserRecoil = useSetRecoilState(userInfoRecoil);
  //   const navigate = useNavigate();
  //   const setRegisterModalState = useSetRecoilState(isRegisterModalState);
  //   const setUserLoginInfo = useSetRecoilState(userLoginInfo);
  //   const setIsLogin = useRecoilValue(isLoginState);
  // const { loginWithCredential } = useAuthContext();

  //   const onSuccess = async (credentialResponse) => {};
  const onSuccess = async (credentialResponse) => {
    const decodedToken = await jwtDecode(credentialResponse.credential);

    firstSignUp({
      id: +decodedToken.sub.slice(0, 9),
      name: decodedToken.family_name,
      email: decodedToken.email,
    })
      .then((res) => {
        console.log(res.data);
        setUserRecoil({
          id: decodedToken.sub.slice(0, 9),
          name: decodedToken.family_name,
          email: decodedToken.email,
        });
        history.push('/set');
      })
      .catch((err) => {
        console.log(err);
        setUserRecoil({
          id: decodedToken.sub.slice(0, 9),
          name: decodedToken.family_name,
          email: decodedToken.email,
        });
      });

    //   userLogin(decodedToken.sub)
    //     .then((response) => {
    //       if (response.data.isRegistered === true) {
    //         localStorage.setItem("accessToken", response.data.tokens.accessToken);
    //         localStorage.setItem(
    //           "refreshToken",
    //           response.data.tokens.refreshToken
    //         );
    //         window.location.href = "/";
    //         setIsLogin(true);
    //       }
    //     })
    //     .catch((error) => {
    //       if (error.response.data.isRegistered === false) {
    //         console.log("ddd", error.response.data);
    //         navigate("/");
    //         setRegisterModalState(true);
    //         setUserLoginInfo(decodedToken);
    //       }
    //     });
  };

  const onFailure = (error) => {
    console.log(error);
  };

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
      <div style={{ display: 'block' }}>
        <GoogleLogin
          onSuccess={(credentialResponse) => onSuccess(credentialResponse)}
          onFailure={onFailure}
          useOneTap
        />
      </div>
    </GoogleOAuthProvider>
  );
}

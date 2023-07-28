import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FC441E', // 로고 컬러 (메인 컬러)
    },
    secondary: {
      main: '#FFFF00', // 노랑 (서브 컬러)
    },
    info: {
      main: '#0000FF', // 파랑 (포인트 컬러)
    },
    subRed: {
      main: '#FF2C00', // 빨강
    },
    mono: {
      main: '#FFFFFF',
      mono1: '#FFFFFF', // 흰색
      mono2: '#F3F3F4', // 살짝 어두운 흰색
      mono3: '#E7E8E9', // 어두운 하양
      mono4: '#CFD1D4', // 흰끼 회색
      mono5: '#9FA3A9', // 밝은 회색
      mono6: '#6F757E', // 회색
      mono7: '#3F4753', // 진한 회색
      mono8: '#2F2E2D', // 더 진한 회색
      black: '#000000', // 검정
    },
  },
});

export default theme;

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF0000', // 빨강 (프라임 컬러)
    },
    secondary: {
      main: '#FFFF00', // 노랑 (서브 컬러)
    },
    info: {
      main: '#0000FF', // 파랑 (포인트 컬러)
    },
  },
});

export default theme;

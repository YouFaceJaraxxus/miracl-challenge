import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useAppSelector } from './redux/store/hooks';
import { selectCommon } from './redux/store/store';

const ThemeConfig = ({ children }: any) => {
  const { theme: currentTheme } = useAppSelector(selectCommon);
  const theme = createTheme({
    palette: {
      primary: {
        main: currentTheme=== 'light' ? '#948CFC' : '#514e85',
        contrastText: '#fff',
        dark: '#221F40',
      },
      secondary: {
        main: '#e9e7ff',
        contrastText: '#e9e7ff',
      },
      text: {
        primary: '#20383C',
        secondary: '#000000',
      },
      error: {
        main: '#e74c3c',
        light: '#f8caca',
      },
      success: {
        main: '#2ECC71',
        light: '#c0fdd9',
      },
      common: {
        white: '#FFFFFF',
      },
      grey: {
        "100": '#b9b6b6',
      }
    },
    typography: {
      fontFamily: ['Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(
        ',',
      ),
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 500,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollbarColor: '#6b6b6b #2b2b2b',
            '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
              backgroundColor: 'none',
              width: 8,
              height: 5,
            },
            '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
              borderRadius: 10,
              backgroundColor: '#948CFC',
            },
            '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus':
            {
              backgroundColor: '#959595',
            },
            '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active':
            {
              backgroundColor: '#959595',
            },
            '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover':
            {
              backgroundColor: '#959595',
            },
            '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
              backgroundColor: '#2b2b2b',
            },
          },
        },
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeConfig;

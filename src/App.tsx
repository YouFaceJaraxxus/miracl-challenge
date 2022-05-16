import { useEffect } from 'react';
import Layout from './components/layout/Layout';
import { setCheckedIsLogged, setIsLogged } from './redux/slices/userSlice';
import { useAppDispatch } from './redux/store/hooks';
import Router from './router/router';
import ThemeConfig from './ThemeConfig';
import { IS_LOGGED_LOCAL_STORAGE } from './util/constants';

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const isLoggedLS = localStorage.getItem(IS_LOGGED_LOCAL_STORAGE);
    if (isLoggedLS) {
      const userLocalStorageParsed = JSON.parse(isLoggedLS);
      if (userLocalStorageParsed) {
        dispatch(setIsLogged(true));
        dispatch(setCheckedIsLogged(true));
      } else {
        dispatch(setIsLogged(false));
      }
    } else {
      dispatch(setCheckedIsLogged(true));
      dispatch(setIsLogged(false));
    }
  }, [dispatch]);

  return (
    <ThemeConfig>
      <Layout>
        <Router />
      </Layout>
    </ThemeConfig>
  );
}

export default App;

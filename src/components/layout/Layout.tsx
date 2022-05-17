import { Snackbar } from '@mui/material';
import { useAppSelector } from '../../redux/store/hooks';
import { selectCommon } from '../../redux/store/store';
import Header from '../header/header';
import { LayoutWrapper } from './layoutStyle';

const Layout = ({ children }: any) => {
  const { showSnackbar } = useAppSelector(selectCommon);
  return (
    <LayoutWrapper>
      <Header />
      {children}
      {showSnackbar && <Snackbar />}
    </LayoutWrapper>
  )
};

export default Layout;
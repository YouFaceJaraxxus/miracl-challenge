import { useAppSelector } from '../../redux/store/hooks';
import { selectCommon } from '../../redux/store/store';
import Snackbar from '../common/snackbar/snackbar';
import Header from '../header/header';
import { LayoutWrapper } from './layoutStyle';

const Layout = ({ children }: any) => {
  const { snackbarConfig } = useAppSelector(selectCommon);
  const { showSnackbar } = snackbarConfig;
  return (
    <LayoutWrapper>
      <Header />
      {children}
      {showSnackbar && <Snackbar />}
    </LayoutWrapper>
  )
};

export default Layout;
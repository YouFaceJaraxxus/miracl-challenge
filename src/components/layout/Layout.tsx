import { useAppSelector } from '../../redux/store/hooks';
import { selectCommon } from '../../redux/store/store';
import Snackbar from '../common/snackbar/snackbar';
import Header from '../header/header';
import { LayoutWrapper } from './layoutStyle';

const Layout = ({ children }: any) => {
  const { showSnackbar } = useAppSelector(selectCommon);
  console.log('showSnackbar', showSnackbar);
  return (
    <LayoutWrapper>
      <Header />
      {children}
      {showSnackbar && <Snackbar />}
    </LayoutWrapper>
  )
};

export default Layout;
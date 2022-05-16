import Header from '../header/header';
import { LayoutWrapper } from './layoutStyle';

const Layout = ({ children }: any) => {
  return (
    <LayoutWrapper>
      <Header />
      {children}
    </LayoutWrapper>
  )
};

export default Layout;
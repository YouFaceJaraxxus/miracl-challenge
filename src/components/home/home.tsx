import { Link } from 'react-router-dom';
import Content from '../common/content/content';
import { HomeSubtitle, HomeWrapper } from './homeStyle';

const Home = () => {
  return (
    <Content title="Home">
      <HomeWrapper>
        <HomeSubtitle>
          Welcome to home!
        </HomeSubtitle>
      </HomeWrapper>
    </Content>
  )
};

export default Home;
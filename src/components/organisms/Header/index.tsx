import Wrapper from '../Wrapper';
import './index.scss';

const Header = () => {
  return (
    <header className="header">
      <Wrapper>
        <h1>
          <a href="/">2048</a>
        </h1>
      </Wrapper>
    </header>
  );
};

export default Header;

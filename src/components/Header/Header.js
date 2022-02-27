import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../store/constexts/userContext/UserContext";

const { default: styled } = require("styled-components");

const HeaderBar = styled.header`
  margin: 0 0 20px 0;
  padding: 0;
  width: 100vw;
  height: 75px;
  background-color: #002137;
  color: #edf6f9;
  display: flex;
  justify-content: space-between;

  & .page-header {
    min-width: fit-content;
    & > * {
      display: inline-block;
    }
    & h1 {
      line-height: 75px;
      margin: 0 10px;
    }
    & h2 {
      font-size: 16px;
      color: #49a078;
    }
  }
  & nav {
    display: flex;
    width: 130px;
    justify-content: space-between;
    margin: 0 10px;
    & a {
      text-decoration: none;
      font-size: 18px;
      line-height: 75px;
      color: #edf6f9;
    }
  }
`;

const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <HeaderBar>
      <div className="page-header">
        <h1>SOCIAL</h1>
        {user ? <h2>{user}</h2> : null}
      </div>
      <nav>
        <Link to="/Login">login</Link>
        <Link to="/register">sign up</Link>
      </nav>
    </HeaderBar>
  );
};

export default Header;

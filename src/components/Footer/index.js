import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.footer`
  width: 100%;
  bottom: 0;
  min-height: 50px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 40px;

  a {
    font-weight: 600;
    :link,
    :active,
    :visited {
      color: var(--gray-40);
    }
    :hover {
      text-decoration: underline;
      color: var(--gray-30);
    }
  }

  ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    word-spacing: 3px;
    color: var(--gray-60);
    font-size: 12px;

    li {
      display: inline-block;
      margin: 2px 5px;
    }
  }

  .copyright {
    text-align: center;
    font-weight: bold;
    color: var(--gray-30);
  }
`;

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <Container>
      <nav>
        <ul>
          <Link to="#">
            <li>About Us</li>
          </Link>
          <Link to="#">
            <li>Support</li>
          </Link>
          <Link to="#">
            <li>API</li>
          </Link>
          <Link to="#">
            <li>Jobs</li>
          </Link>
          <Link to="#">
            <li>Privacy</li>
          </Link>
          <Link to="#">
            <li>Terms</li>
          </Link>
          <Link to="#">
            <li>Language</li>
          </Link>
        </ul>
      </nav>
      <span className="copyright">
        © {date} <Link to="#">Dylance</Link>
      </span>
    </Container>
  );
};

export default Footer;

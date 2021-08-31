import { NavContainer, NavList, NavItem } from "./Nav.styles";
import { Link } from "react-router-dom";
import { PUBLIC_URL } from "../../constants/";
import { useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <NavContainer>
      <NavList>
        <Link to={PUBLIC_URL.home}>
          <NavItem active={pathname === PUBLIC_URL.home}>All</NavItem>
        </Link>
        <Link to={PUBLIC_URL.favs}>
          <NavItem active={pathname === PUBLIC_URL.favs}>My favs</NavItem>
        </Link>
      </NavList>
    </NavContainer>
  );
}

export default Nav;

import { NavContainer, NavList, NavItem } from "./Nav.styles";
import { Link } from "react-router-dom";
import { PUBLIC_URL } from "../../constants/";

function Nav() {
  return (
    <NavContainer>
      <NavList>
        <Link to={PUBLIC_URL.home}>
          <NavItem>All</NavItem>
        </Link>
        <Link to={PUBLIC_URL.favs}>
          <NavItem>My Faves</NavItem>
        </Link>
      </NavList>
    </NavContainer>
  );
}

export default Nav;

import styled, { css } from "styled-components/macro";
import { colors, fontConfig } from '../../styles/theme'

const activeStyle = {
  border: `1px solid ${colors.primary}`,
  color: `${colors.primary}`,
}

export const NavContainer = styled.nav`
  max-width:30%;
  margin: 40px auto;
  `

export const NavList = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
`;

export const NavItem = styled.li`
  font-size: ${fontConfig.fontSize.nav};
  color: ${colors.blackParagraph};
  padding: .5em;
  width: 98px;
  border-radius: 2px;
  border: solid 1px #d6d6d6;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all .3s ease-out;
 ${(props: AppComponents.NavItemProps) => props.active &&
    css`
      ${activeStyle}
    `}
  
  &:hover {
    ${css`
      ${activeStyle}
    `}
  }
  
  &::first-of-type{
    border-right: 0px;
  }
`
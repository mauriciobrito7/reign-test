import styled from "styled-components/macro";
import { colors, layout } from '../../styles/theme'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 114px;
  margin-bottom: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #ececec -32%,${colors.white});
  box-shadow: 0 1px 4px 0 rgba(0, 21, 41, 0.12);
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  max-width: ${layout.maxWidth};
  margin: ${layout.margin};
  ${layout.responsive.desktop}
`

export const HeaderTitle = styled.h1`
  text-transform: uppercase;
`

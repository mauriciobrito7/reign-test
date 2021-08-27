import styled from "styled-components/macro";
import { layout } from "../../styles/theme";

export const Container = styled.div`
  width: 100%; 
`;

export const MainContent = styled.main`
  max-width: ${layout.maxWidth};
  margin: ${layout.margin};
  ${layout.responsive.desktop}
  border:1px dashed red;
`;
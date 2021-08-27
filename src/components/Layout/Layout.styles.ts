import styled from "styled-components/macro";
import { breakpoints } from "../../styles/theme";
import { device } from '../../styles/utils'

export const Container = styled.div`
  max-width: ${breakpoints.desktop};
  ${device.desktop`
    margin-right: auto;
    margin-left: auto; 
  `}
`;

export const MainContent = styled.main`
  width: 100%;
  border: 1px dashed red;
`;
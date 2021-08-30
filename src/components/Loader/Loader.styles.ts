import styled, { keyframes } from "styled-components/macro";
import { colors } from '../../styles/theme'
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoaderContainer = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  
  border-top: 2px solid ${colors.primary};
  border-right: 2px solid ${colors.primary};
  border-bottom: 2px solid ${colors.primary};
  border-left: 4px solid ${colors.primary};
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  position: absolute;
  top: calc(50% - 24px);
  left: calc(50% - 12px)
`;
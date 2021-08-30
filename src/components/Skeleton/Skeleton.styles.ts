import styled from "styled-components/macro";
import { addOpacityToColor } from '../../styles/utils';
import { device } from '../../styles/utils';

export const SkeletonContainer = styled.div`
  width: 100%;
  padding-bottom: 2em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const SkeletonShape = styled.div`
  width: 100%;
  margin-bottom: 1em;
  height: 90px;
  border-radius: 6px;
  animation: pulse 1s infinite ease-in-out;
    @keyframes pulse {
        0% {
          background: ${addOpacityToColor('#F5F5F5', 0.6)};
        }
        50% {
          background: ${addOpacityToColor('#F5F5F5', 0.8)};
        }
        100% {
          background: ${addOpacityToColor('#F5F5F5', 0.6)};
        }
    }

  ${device.tablet`
    width: calc(50% - 20px);
  `}


`
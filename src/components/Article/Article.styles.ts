import styled from "styled-components/macro";
import { colors } from '../../styles/theme';
import { ReactComponent as Time } from "../../assets/img/time.svg";
import { device } from '../../styles/utils';

const WIDTH_REACTION_SECTION = '68px'

export const ArticleContainer = styled.div`
  border:1px solid ${colors.border};
  border-radius: 6px;
  width: 100%;
  margin-bottom: 1em;
  min-height: 90px;
  display: flex;
  cursor: pointer;
  transition: opacity .3s ease;
  a{
    color:${colors.blackParagraph};
    width: 100%;
    height: 100%;
    display:flex;
  }
  &:hover {
    opacity: 40%;
  }
  ${device.tablet`
    width: calc(50% - 20px);
  `}
  `

export const ArticleContent = styled.div`
  padding: 1em 1.25em;
  width: calc(100% - ${WIDTH_REACTION_SECTION});
  display: flex;
  align-items: center;
`

export const ArticleInfo = styled.div`
  width: 100%;
`

export const TimeIcon = styled(Time)`
  margin-right: .5em;
`

export const ArticleCaption = styled.h4`
  margin-bottom: .5em;
  display: flex;
  align-items: center;
`;

export const ArticleTitle = styled.h3`
`

export const ArticleReaction = styled.div`
  width: ${WIDTH_REACTION_SECTION};
  display: flex;
  justify-content: center;
  align-items: center;
  background: #F5F5F5;
  border-radius: 0px 6px 6px 0px;
`
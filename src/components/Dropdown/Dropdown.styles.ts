import styled from "styled-components/macro";
import { colors } from '../../styles/theme'
import { borderRadius } from '../../styles/theme';
import { addOpacityToColor } from '../../styles/utils';
import { ReactComponent as ArrowDown } from '../../assets/img/down-arrow.svg';

const WIDTH_DROPDOWN = '240px';

export const DropdownContainer = styled.div`
  width: ${WIDTH_DROPDOWN};
  height: 32px;
  color: ${colors.blackItemText};
  padding: .5em 1em;
  border-radius: ${borderRadius};
  border: solid 1px #2e2e2e;
  margin-bottom: 38px;
  position:relative;
  display: flex;
  align-items:center;
`

export const DropdownIconWrapper = styled.div`
  width:10%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const DropdownIcon = styled(ArrowDown)`
  width: 1em;
  height:1em;
  fill: ${colors.blackItemText};
  cursor: pointer;
`

export const DropdownSelector = styled.div`
  width:90%;
`

export const DropdownList = styled.div`
  width: ${WIDTH_DROPDOWN};
  height: 139px;
  box-shadow: 0 2px 2px 0 #dad8d8;
  background: #fff;
  overflow-y: auto;
  z-index: 1000;
  position:absolute;
  top:110%;
  left: 0;
`

export const DropdownItem = styled.li`
  width: 100%;
  height: 46px;
  list-style:none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left:1em;
  cursor: pointer;

  &:hover{
    background: ${addOpacityToColor(colors.hoverItem, 0.2)};
  }
`
export const DropdownImgWrapper = styled.div`
  width: 24px;
  display: flex;
  justify-content: center;
  margin-right: 1em;
`
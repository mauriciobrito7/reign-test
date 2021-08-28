import { useState } from "react";
import {
  DropdownContainer,
  DropdownSelector,
  DropdownIconWrapper,
  DropdownIcon,
  DropdownList,
  DropdownItem,
} from "./Dropdown.styles";
import angularIcon from "../../assets/img/angular-icon.png";
import reactIcon from "../../assets/img/react-icon.png";
import vueIcon from "../../assets/img/vue-icon.png";

function Dropdown() {
  const [optionSelected, setOptionSelected] = useState(null);
  const [openDropdonwList, setOpenDropdonwList] = useState(false);

  const handleOnClick = () => {
    setOpenDropdonwList(!openDropdonwList);
  };

  return (
    <DropdownContainer>
      <DropdownSelector>{"Select your news"}</DropdownSelector>
      <DropdownIconWrapper>
        <DropdownIcon onClick={handleOnClick} />
      </DropdownIconWrapper>
      {openDropdonwList && (
        <DropdownList>
          <DropdownItem>
            <img src={angularIcon} /> Angular
          </DropdownItem>
          <DropdownItem>
            <img src={reactIcon} /> React.js
          </DropdownItem>
          <DropdownItem>
            <img src={vueIcon} /> Vue.js
          </DropdownItem>
        </DropdownList>
      )}
    </DropdownContainer>
  );
}

export default Dropdown;

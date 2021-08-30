import { useState } from "react";
import {
  DropdownContainer,
  DropdownSelector,
  DropdownIconWrapper,
  DropdownIcon,
  DropdownList,
  DropdownItem,
  DropdownImgWrapper,
} from "./Dropdown.styles";
import angularIcon from "../../assets/img/angular-icon.png";
import reactIcon from "../../assets/img/react-icon.png";
import vueIcon from "../../assets/img/vue-icon.png";
import allTechnologiesIcon from "../../assets/img/all-technologies.png";

const FILTER_OPTIONS: Array<AppComponents.FilterOption> = [
  {
    name: "Angular",
    icon: angularIcon,
  },
  {
    name: "React.js",
    icon: reactIcon,
  },
  {
    name: "Vue.js",
    icon: vueIcon,
  },
];

const defaultOp: AppComponents.FilterOption = {
  name: "All",
  icon: allTechnologiesIcon,
};

function Dropdown({
  titleOnDropdown = "Select your news",
  defaultOption = defaultOp,
  options,
}: AppComponents.DropdownProps) {
  const [optionSelected, setOptionSelected] = useState<string | null>(null);
  const [openDropdownList, setOpenDropdownList] = useState(false);

  const handleOpenDropdown = () => {
    setOpenDropdownList(!openDropdownList);
  };

  const closeDropdown = () => {
    setOpenDropdownList(false);
  };

  const handleSelectOption = (option: string | null) => {
    setOptionSelected(option);
    closeDropdown();
  };

  return (
    <DropdownContainer>
      <DropdownSelector>{optionSelected || titleOnDropdown}</DropdownSelector>
      <DropdownIconWrapper>
        <DropdownIcon onClick={handleOpenDropdown} />
      </DropdownIconWrapper>
      {openDropdownList && (
        <DropdownList>
          {optionSelected && (
            <DropdownItem onClick={() => handleSelectOption(null)}>
              <DropdownImgWrapper>
                <img src={defaultOption.icon} />
              </DropdownImgWrapper>
              {defaultOption.name}
            </DropdownItem>
          )}
          {FILTER_OPTIONS.map((option: AppComponents.FilterOption) => (
            <DropdownItem
              onClick={() => handleSelectOption(option.name)}
              key={option.name}
            >
              <DropdownImgWrapper>
                <img src={option.icon} />
              </DropdownImgWrapper>
              {option.name}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
}

export default Dropdown;

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

function Dropdown({
  titleOnDropdown,
  defaultOption,
  options,
  setOption,
  optionSelected,
}: AppComponents.DropdownProps) {
  const [openDropdownList, setOpenDropdownList] = useState(false);
  const [nameOption, setnameOption] = useState<string | null>(null);

  const handleOpenDropdown = () => {
    setOpenDropdownList(!openDropdownList);
  };

  const closeDropdown = () => {
    setOpenDropdownList(false);
  };

  const handleSelectOption = (option: string, name: string | null) => {
    setOption(option);
    setnameOption(name);
    closeDropdown();
  };

  return (
    <DropdownContainer>
      <DropdownSelector>{nameOption || titleOnDropdown}</DropdownSelector>
      <DropdownIconWrapper>
        <DropdownIcon onClick={handleOpenDropdown} />
      </DropdownIconWrapper>
      {openDropdownList && (
        <DropdownList>
          {optionSelected && (
            <DropdownItem onClick={() => handleSelectOption("", null)}>
              <DropdownImgWrapper>
                <img alt={optionSelected} src={defaultOption.icon} />
              </DropdownImgWrapper>
              {defaultOption.name}
            </DropdownItem>
          )}
          {options
            .filter(
              (option: AppComponents.FilterOption) =>
                option.option !== optionSelected
            )
            .map((option: AppComponents.FilterOption) => (
              <DropdownItem
                onClick={() => handleSelectOption(option.option, option.name)}
                key={option.name}
              >
                <DropdownImgWrapper>
                  <img src={option.icon} alt={option.name} />
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

declare namespace AppComponents {

  type Option = string;
  interface DropdownProps {
    defaultOption: FilterOption;
    titleOnDropdown: string;
    options: Array<FilterOption>;
    optionSelected: Option;
    setOption: (option: Option) => void;
    saveInLocalStorage: (option: Option) => void;
  }
}
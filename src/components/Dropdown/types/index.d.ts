declare namespace AppComponents {

  type Option = string;
  interface DropdownProps {
    defaultOption: FilterOption;
    titleOnDropdown: string;
    options: Array<FilterOption>;
    setOption: (option: Option) => void;
    optionSelected: Option;
  }
}
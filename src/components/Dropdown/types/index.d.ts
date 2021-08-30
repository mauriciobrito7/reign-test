declare namespace AppComponents {
  interface FilterOption {
    name: string;
    icon: string;
  }

  interface DropdownProps {
    defaultOption?: FilterOption;
    titleOnDropdown?: string;
    options?: Array<FilterOption>
  }
}
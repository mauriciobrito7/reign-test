import { useState } from "react";
import Dropdown from "../../components/Dropdown";
import Articles from "../../components/Articles";

import angularIcon from "../../assets/img/angular-icon.png";
import reactIcon from "../../assets/img/react-icon.png";
import vueIcon from "../../assets/img/vue-icon.png";
import allTechnologiesIcon from "../../assets/img/all-technologies.png";

const FILTER_OPTIONS: Array<AppComponents.FilterOption> = [
  {
    name: "Angular",
    option: "angular",
    icon: angularIcon,
  },
  {
    name: "React.js",
    option: "reactjs",
    icon: reactIcon,
  },
  {
    name: "Vue.js",
    option: "vuejs",
    icon: vueIcon,
  },
];

const defaultOp: AppComponents.FilterOption = {
  name: "All",
  option: "",
  icon: allTechnologiesIcon,
};

const dropDownTitle = "Select your news";

function Home() {
  const [optionSelected, setOptionSelected] = useState<string>("");

  return (
    <div>
      <Dropdown
        titleOnDropdown={dropDownTitle}
        defaultOption={defaultOp}
        options={FILTER_OPTIONS}
        setOption={setOptionSelected}
        optionSelected={optionSelected}
      />
      <Articles filter={optionSelected} />
    </div>
  );
}

export default Home;

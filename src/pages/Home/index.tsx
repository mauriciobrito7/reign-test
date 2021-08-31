import { useState } from "react";
import Dropdown from "../../components/Dropdown";
import Articles from "../../components/Articles";

import angularIcon from "../../assets/img/angular-icon.png";
import reactIcon from "../../assets/img/react-icon.png";
import vueIcon from "../../assets/img/vue-icon.png";
import allTechnologiesIcon from "../../assets/img/all-technologies.png";

import useLocalStorage from "../../hooks/useLocalStorage";
import useArticles from "../../hooks/useArticles";
import { DROPDOWN_FILTER, FAV_ARTICLES } from "../../constants";

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
  const [filterInLocalStorage, setFilterInLocalStorage] = useLocalStorage(
    DROPDOWN_FILTER,
    ""
  );
  const [filter, setFilter] = useState<string>(filterInLocalStorage);
  const renderOnlyFavs = false;
  const [favArticles, setFavArticles] = useLocalStorage(FAV_ARTICLES, []);
  const { articles, isLoading, loadMore } = useArticles(filter, renderOnlyFavs);

  return (
    <div>
      <Dropdown
        titleOnDropdown={dropDownTitle}
        defaultOption={defaultOp}
        options={FILTER_OPTIONS}
        setOption={setFilter}
        optionSelected={filter}
        saveInLocalStorage={setFilterInLocalStorage}
      />
      <Articles
        articles={articles}
        favArticles={favArticles}
        setFavArticles={setFavArticles}
        isLoading={isLoading}
        loadMore={loadMore}
        renderOnlyFavs={renderOnlyFavs}
      />
    </div>
  );
}

export default Home;

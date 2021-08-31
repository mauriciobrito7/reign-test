import Articles from "../../components/Articles";
import useLocalStorage from "../../hooks/useLocalStorage";
import { FAV_ARTICLES } from "../../constants";

function Favs() {
  const renderOnlyFavs = true;
  const [favArticles, setFavArticles] = useLocalStorage(FAV_ARTICLES, []);
  return (
    <div>
      <Articles
        renderOnlyFavs={renderOnlyFavs}
        favArticles={favArticles}
        setFavArticles={setFavArticles}
      />
    </div>
  );
}

export default Favs;

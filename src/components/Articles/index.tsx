import { useEffect, useRef } from "react";
import useArticles from "../../hooks/useArticles";
import Article from "../Article";
import { ArticlesContainer, Bottom } from "./Articles.styles";
import { ArticleProps } from "../../types/article";
import useLocalStorage from "../../hooks/useLocalStorage";
import { FAV_ARTICLES } from "../../constants/";
import Skeleton from "../Skeleton";
import useNearScreen from "../../hooks/useNearScreen";

function Articles({
  renderOnlyFavs,
  filter = "",
}: AppComponents.ArticlesProps) {
  const { articles, isLoading, nextPage } = useArticles(filter, renderOnlyFavs);
  const [valuesInLocalStorage, setValuesInLocalStorage] = useLocalStorage(
    FAV_ARTICLES,
    []
  );
  const ref = useRef(null);
  const isBottomVisible = useNearScreen(
    ref,
    {
      threshold: 0,
    },
    false
  );

  useEffect(() => {
    if (isBottomVisible) {
      nextPage();
      console.log("Fetch new articles");
    }
  }, [isBottomVisible]);

  const verifyArticles = () => articles && articles.length > 0;

  const checkArticleLiked = (id: string): boolean =>
    valuesInLocalStorage.some((article: ArticleProps) => article.id === id);

  const hasArticleAlreadyLiked = (articles: Array<ArticleProps>, id: string) =>
    articles.some((article: ArticleProps) => article.id === id);

  const setLiked = (articleToLike: ArticleProps) => {
    if (hasArticleAlreadyLiked(valuesInLocalStorage, articleToLike.id)) {
      const likeToDelete = valuesInLocalStorage.filter(
        (article: ArticleProps) => article.id !== articleToLike.id
      );
      setValuesInLocalStorage(likeToDelete);
    } else {
      setValuesInLocalStorage([articleToLike, ...valuesInLocalStorage]);
    }
  };

  if (isLoading) {
    return <Skeleton numberOfShapes={20} />;
  }
  if (renderOnlyFavs) {
    return (
      <ArticlesContainer>
        <>
          {valuesInLocalStorage.map((articleFav: ArticleProps) => (
            <Article
              key={articleFav.id}
              title={articleFav.title}
              author={articleFav.author}
              url={articleFav.url}
              date={articleFav.date}
              id={articleFav.id}
              liked={checkArticleLiked(articleFav.id)}
              setLiked={setLiked}
            />
          ))}
          <Bottom ref={ref} />
        </>
      </ArticlesContainer>
    );
  }

  return (
    <ArticlesContainer>
      <>
        {verifyArticles() &&
          articles.map((article: ArticleProps) => (
            <Article
              key={article.id}
              title={article.title}
              author={article.author}
              url={article.url}
              date={article.date}
              id={article.id}
              liked={checkArticleLiked(article.id)}
              setLiked={setLiked}
            />
          ))}
        <Bottom ref={ref} />
      </>
    </ArticlesContainer>
  );
}

export default Articles;

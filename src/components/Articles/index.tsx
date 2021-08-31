import { useEffect } from "react";
import useArticles from "../../hooks/useArticles";
import Article from "../Article";
import { ArticlesContainer, EmptyData, Bottom } from "./Articles.styles";
import { ArticleProps } from "../../types/article";
import useLocalStorage from "../../hooks/useLocalStorage";
import { FAV_ARTICLES } from "../../constants/";
import Skeleton from "../Skeleton";
import Loader from "../Loader";
import { useInView } from "react-intersection-observer";

function Articles({
  renderOnlyFavs,
  filter = "",
}: AppComponents.ArticlesProps) {
  const { articles, isLoading, nextPage } = useArticles(filter, renderOnlyFavs);
  const [valuesInLocalStorage, setValuesInLocalStorage] = useLocalStorage(
    FAV_ARTICLES,
    []
  );
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      nextPage();
    }
    // eslint-disable-next-line
  }, [inView]);

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

  if (isLoading && articles.length === 0) {
    return <Skeleton numberOfShapes={20} />;
  }

  if (renderOnlyFavs) {
    if (!isLoading && valuesInLocalStorage.length === 0) {
      return (
        <EmptyData>
          <h2>There isn't any article to show</h2>
        </EmptyData>
      );
    }
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
      </>
      <Bottom ref={ref} />
      {isLoading && articles.length > 0 && <Loader position="relative" />}
    </ArticlesContainer>
  );
}

export default Articles;

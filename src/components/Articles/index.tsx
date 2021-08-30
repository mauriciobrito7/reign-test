import useArticles from "../../hooks/useArticles";
import Article from "../Article";
import { ArticlesContainer } from "./Articles.styles";
import { ArticleProps } from "../../types/article";
import useLocalStorage from "../../hooks/useLocalStorage";
import { FAV_ARTICLES } from "../../constants/";

function Articles({ renderOnlyFavs }: AppComponents.ArticlesProps) {
  const [articles, isLoading] = useArticles();
  const [valuesInLocalStorage, setValuesInLocalStorage] = useLocalStorage(
    FAV_ARTICLES,
    []
  );

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

  return (
    <ArticlesContainer>
      {!isLoading ? (
        <>
          {renderOnlyFavs ? (
            <>
              {verifyArticles() &&
                valuesInLocalStorage.map((articleFav: ArticleProps) => (
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
          ) : (
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
          )}
        </>
      ) : (
        "Loading..."
      )}
    </ArticlesContainer>
  );
}

export default Articles;

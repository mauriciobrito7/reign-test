import { useEffect } from "react";
import Article from "../Article";
import { ArticlesContainer, EmptyData, Bottom } from "./Articles.styles";
import { ArticleProps } from "../../types/article";
import Skeleton from "../Skeleton";
import Loader from "../Loader";
import { useInView } from "react-intersection-observer";

function Articles({
  articles,
  favArticles,
  setFavArticles,
  isLoading,
  loadMore,
  renderOnlyFavs,
}: AppComponents.ArticlesProps) {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && loadMore) {
      loadMore();
    }
    // eslint-disable-next-line
  }, [inView]);

  const verifyArticles = () => articles && articles.length > 0;

  const checkArticleLiked = (id: string): boolean =>
    favArticles.some((article: ArticleProps) => article.id === id);

  const hasArticleAlreadyLiked = (articles: Array<ArticleProps>, id: string) =>
    articles.some((article: ArticleProps) => article.id === id);

  const setLiked = (articleToLike: ArticleProps) => {
    if (hasArticleAlreadyLiked(favArticles, articleToLike.id)) {
      const likeToDelete = favArticles.filter(
        (article: ArticleProps) => article.id !== articleToLike.id
      );
      setFavArticles(likeToDelete);
    } else {
      setFavArticles([articleToLike, ...favArticles]);
    }
  };

  if (isLoading && articles?.length === 0) {
    return <Skeleton numberOfShapes={20} />;
  }

  if (renderOnlyFavs) {
    if (!isLoading && favArticles && favArticles.length === 0) {
      return (
        <EmptyData>
          <h2>There isn't any article to show</h2>
        </EmptyData>
      );
    }
    return (
      <ArticlesContainer>
        <>
          {favArticles.map((articleFav: ArticleProps) => (
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
          articles?.map((article: ArticleProps) => (
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
      {isLoading && articles && articles.length > 0 && (
        <Loader position="relative" />
      )}
    </ArticlesContainer>
  );
}

export default Articles;

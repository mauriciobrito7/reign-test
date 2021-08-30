import { useEffect } from "react";
import {
  ArticleContainer,
  ArticleContent,
  ArticleInfo,
  ArticleCaption,
  ArticleReaction,
  ArticleTitle,
  TimeIcon,
} from "./Article.styles";
import { ReactComponent as HeartIcon } from "../../assets/img/heart.svg";
import { ReactComponent as HeartOutlineIcon } from "../../assets/img/heart-no-fill.svg";
import { useNearScreen } from "../../hooks/useNearScreen";

function Article({
  title,
  id,
  author,
  url,
  date,
  liked,
  setLiked,
}: AppComponents.ArticleProps) {
  const [loadMore, element] = useNearScreen();
  useEffect(() => {
    if (loadMore) {
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadMore]);
  return (
    <ArticleContainer ref={element}>
      <a target="_blank" rel="noreferrer" href={url}>
        <ArticleContent>
          <ArticleInfo>
            <ArticleCaption>
              <TimeIcon />
              {date} by {author}
            </ArticleCaption>
            <ArticleTitle>{title}</ArticleTitle>
          </ArticleInfo>
        </ArticleContent>
      </a>
      <ArticleReaction
        onClick={() => setLiked({ title, id, author, url, date })}
      >
        {liked ? <HeartIcon /> : <HeartOutlineIcon />}
      </ArticleReaction>
    </ArticleContainer>
  );
}

export default Article;

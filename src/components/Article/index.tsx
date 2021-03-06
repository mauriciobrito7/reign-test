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
import useTimeAgo from "../../hooks/useTimeAgo";

function Article({
  title,
  id,
  author,
  url,
  date,
  liked,
  setLiked,
}: AppComponents.ArticleProps) {
  const timeAgo = useTimeAgo(date);
  return (
    <ArticleContainer>
      <a target="_blank" rel="noreferrer" href={url}>
        <ArticleContent>
          <ArticleInfo>
            <ArticleCaption>
              <TimeIcon />
              {timeAgo} by {author}
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

import { useState } from "react";
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

function Article() {
  const [liked, setLiked] = useState(false);

  const handleOnChangeLiked = () => {
    setLiked(!liked);
  };

  return (
    <ArticleContainer>
      <ArticleContent>
        <ArticleInfo>
          <ArticleCaption>
            <TimeIcon />1 hour ago by author
          </ArticleCaption>
          <ArticleTitle>
            Realize for React for Visualizing State ﬂow and component hierarchy
          </ArticleTitle>
        </ArticleInfo>
      </ArticleContent>
      <ArticleReaction onClick={handleOnChangeLiked}>
        {liked ? <HeartIcon /> : <HeartOutlineIcon />}
      </ArticleReaction>
    </ArticleContainer>
  );
}

export default Article;

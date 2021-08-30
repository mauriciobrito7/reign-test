declare namespace AppComponents {
  interface ArticleProps {
    author: string;
    title: string;
    url: string;
    date: string;
    id: string;
    liked: boolean;
    setLiked: (article: any) => void
  }
}
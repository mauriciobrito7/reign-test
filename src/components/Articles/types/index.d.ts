declare namespace AppComponents {

  export interface ArticleProps {
    title: string;
    author: string;
    url: string;
    date: string;
    id: string;
  }
  interface ArticlesProps {
    renderOnlyFavs: boolean;
    articles?: any[];
    favArticles: any[];
    isLoading?: boolean;
    setFavArticles: (article: any) => void;
    loadMore?: () => void;
  }

  interface ArticlesFavProps {
    renderOnlyFavs: boolean;
  }
}
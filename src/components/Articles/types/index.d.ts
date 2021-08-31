declare namespace AppComponents {
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
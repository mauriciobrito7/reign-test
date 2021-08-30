import { useEffect, useState } from "react";
import { fetchArticles } from '../utils/api';
import { ArticleProps } from '../types/article'

export default function useArticles(filter: string, getFromLocalStorage = false) {

  const [articles, setArticles] = useState<ArticleProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const controller = new AbortController();
  const { signal } = controller;


  const getArticles = async () => {
    try {
      await fetchArticles(filter, signal, page).then((data) => setArticles(data));
    } catch (error) {
      console.log(`Error ${error}`);
    }
    setIsLoading(false);
  };

  const nextPage = () => {
    const newPage = page + 1;
    setPage(newPage);
  }

  useEffect(() => {
    if (!getFromLocalStorage) {
      setIsLoading(true);
      getArticles();
    }
    return () => {
      controller.abort();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, page]);

  return { articles, isLoading, nextPage };
};
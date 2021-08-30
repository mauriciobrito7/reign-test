import { useEffect, useState } from "react";
import { fetchArticles } from '../utils/api';

export default function useArticles(filter: string, getFromLocalStorage = false) {
  const [articles, setArticles] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const controller = new AbortController();
  const { signal } = controller;


  const getArticles = async () => {
    try {
      await fetchArticles(filter, signal).then((data) => setArticles(data));
    } catch (error) {
      console.log(`Error ${error}`);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (!getFromLocalStorage) {
      setIsLoading(true);
      getArticles();
    }
    return () => {
      controller.abort();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return [articles, isLoading];
};
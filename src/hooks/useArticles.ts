import { useEffect, useState } from "react";
import { fetchArticles } from '../utils/api';

export default function useArticles(filter: string) {
  const [articles, setArticles] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false)

  const getArticles = async () => {
    try {
      await fetchArticles(filter).then((data) => setArticles(data));
    } catch (error) {
      console.log(`Error ${error}`);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    getArticles();
  }, [filter]);

  return [articles, isLoading];
};
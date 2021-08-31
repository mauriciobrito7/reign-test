import { useEffect, useState } from "react";
import { fetchArticles } from '../utils/api';
import { ArticleProps } from '../types/article';

const NUM_OF_ARTICLES_PER_PAGE = 20;
const DEFAULT_PAGE = 0;
const DEFAULT_QUERY = '';

export default function useArticles(filter: string, getFromLocalStorage = false) {

  const [articles, setArticles] = useState<ArticleProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const controller = new AbortController();
  const { signal } = controller;


  const getArticles = async () => {
    try {
      await fetchArticles(signal, DEFAULT_QUERY, page, NUM_OF_ARTICLES_PER_PAGE).then((data) => setArticles([...articles, ...data]));
    } catch (error) {
      console.log(`Error ${error}`);
    }
    setIsLoading(false);
  };

  const getArticleByFilter = async () => {
    try {
      await fetchArticles(signal, filter, DEFAULT_PAGE, NUM_OF_ARTICLES_PER_PAGE).then((data) => setArticles(data));
    } catch (error) {
      console.log(`Error ${error}`);
    }
    setIsLoading(false);
  }

  const loadMore = () => {
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
  }, [page]);

  useEffect(() => {
    if (!getFromLocalStorage) {
      setIsLoading(true);
      getArticleByFilter()
    }
    return () => {
      controller.abort();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter])

  return { articles, isLoading, loadMore };
};
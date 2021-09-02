const apiUrl = (query: string, page: number, numOfArticlesPerPage: number) => `https://hn.algolia.com/api/v1/search_by_date?query=${query}&page=${page}&hitsPerPage=${numOfArticlesPerPage}`

const mapHitsToArticles = (data: any) => {
  const { author, story_title, story_url, created_at, objectID, url, title } = data;

  return {
    author,
    title: story_title || title,
    url: story_url || url,
    date: created_at,
    id: objectID
  }
}

const filterArticles = (data: any) => data.title && data.url

export const fetchArticles = async (signal: any, query: string, page: number, numOfArticlesPerPage: number) => {
  try {
    const response = await fetch(apiUrl(query, page, numOfArticlesPerPage), { signal });
    if (!response.ok) throw new Error(await response.text());
    const data = await response.json();
    const hits = await data.hits;
    const articles = hits.map(mapHitsToArticles);
    console.log(articles);
    const filteredArticles = articles.filter(filterArticles);
    return filteredArticles;
  } catch (error) {
    return error;
  }
}
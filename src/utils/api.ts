const NUM_OF_ARTICLES_PER_PAGE = 20;
const DEFAULT_PAGE = 0;
const apiUrl = (query: string, page: number, numOfArticlesPerPage: number) => `https://hn.algolia.com/api/v1/search_by_date?query=${query}&page=${page}&hitsPerPage=${numOfArticlesPerPage}`

const mapHitsToArticles = (data: any) => {
  const { author, story_title, story_url, created_at, objectID } = data;

  return {
    author,
    title: story_title,
    url: story_url,
    date: created_at,
    id: objectID
  }
}

export const fetchArticles = async (query = '', page = DEFAULT_PAGE, numOfArticlesPerPage = NUM_OF_ARTICLES_PER_PAGE) => {
  try {
    const response = await fetch(apiUrl(query, page, numOfArticlesPerPage));
    if (!response.ok) throw new Error(await response.text());
    const data = await response.json();
    const hits = await data.hits;
    const articles = hits.map(mapHitsToArticles)
    return articles;
  } catch (error) {
    return error;
  }
}
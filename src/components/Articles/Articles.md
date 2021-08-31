Articles example:
```js

  const articles = [
    {
      "date": "2021-08-29T22:09:24.000Z",
      "title": 'tren of React',
      "url": 'http://awesci.com/train-wheels-are-amazing/',
      "author": "gpsx",
      
      },
        {
      "date": "2021-08-29T13:36:32.000Z",
      "title": 'Another article',
      "url": 'http://awesci.com/train-wheels-are-amazing/',
      "author": "gpsx",
      
      }
      
      ];
  const favArticles = [{
      "date": "2021-08-29T22:09:24.000Z",
      "title": 'tren of React',
      "url": 'http://awesci.com/train-wheels-are-amazing/',
      "author": "gpsx",
      }]

  const setFavArticles = () => {
    console.log('setting fav articles');
  }

  <Articles
    articles={articles}
    favArticles={favArticles}
    setFavArticles={setFavArticles}
  />
```
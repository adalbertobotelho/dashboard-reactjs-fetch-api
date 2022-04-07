import TopBar from "./components/TopBar";
import Search from "./components/Search";
import Card from "./components/Card";
import Title from "./components/Title";

import { useState, useEffect } from 'react';

import { GlobalStyle } from './styles';
import api from "./config/api";

function App() {
  const [newArticle, setNewArticle] = useState('');
  const [articlesList, setArticlesList] = useState([]);
  const [articlesListLength, setArticlesListLength] = useState(0);
  
  console.log(newArticle);

  async function handleSearchArticle(event) {
    event.preventDefault();
    const { data: response } = await api.get(`articles?title_contains=${newArticle}`);
    setArticlesList(response);
  }

  return (
    <>
      <GlobalStyle />
      <TopBar />
      <Search 
        newArticle={newArticle} 
        setNewArticle={setNewArticle} 
        handleSearchArticle={handleSearchArticle} 
        articlesList={articlesList}
        setArticlesListLength={setArticlesListLength}
      />
      <Title 
        setNewArticle={setNewArticle} 
        setArticlesList={setArticlesList} 
        articlesList={articlesList} 
      />

      <div className={'cards-wrapper'}>
        {
          articlesList.map(article => (
            <>
            <Card title={article.title} imageUrl={article.imageUrl} key={article.id} />
            </>
          ))
        }
      </div>
    </>
  )
}

export default App

import { useState, useEffect } from 'react';

function NewsReel() {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch news items from GNews API
    const apikey = '6ba63ba21bedd014177cac1143a140ec';
    const url = 'https://gnews.io/api/v4/search?q=netball&lang=en&country=au&max=6&apikey=' + apikey;
    
    fetch(url)
      .then((response) => response.json())
      .then((data) =>
        setNewsItems(
          data.articles.map((article) => ({
            id: article.url,
            title: article.title,
            description: article.description,
            url: article.url,
          }))
        )
      );
  }, []);

  return (
    <div className='News'>
      <section id ="news"/>
      <h1 style={{ color: "#a18525" }}>News</h1>
      <div className='back-to-top'>
      <a href="#navigation" className="back-to-top">Back to top</a>
      </div>
      <br/>
    <div
      id="news-reel-container"
      style={{
        display: 'flex',
        alignItems: 'center',
        overflowX: 'scroll',
        height: '300px',
        whiteSpace: 'normal',
        padding: '10px',
        backgroundColor: '#a18525',
        boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      {newsItems.map((item) => (
        <a
          key={item.id}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            width: '300px',
            margin: '0 10px',
            backgroundColor: '#fff',
            borderRadius: '10px',
            padding: '10px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            textDecoration: 'none',
            color: '#000',
            wordWrap: 'break-word' 
          }}
>
      <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>{item.title}</div>
      <div style={{ marginBottom: '10px' }}>{item.description}</div>
      <div style={{ fontSize: '0.8em', color: '#555' }}>
      </div>
      <div style={{ marginTop: '10px' }}>{item.content}</div>
      </a>
      ))}
    </div>
    </div>
  );
}

export default NewsReel;

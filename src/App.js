import './App.css';import React, { useState, useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import store from './store/store';
import PublicationForm from "./PublicationForm";

function App() {

  const [posts, setPosts] = useState([]);

  const publications = useSelector(state => state.publications);

  useEffect(() => {
    setPosts(publications);
  }, [publications]);

  return (
    <Provider store={store}>
      <div className="App">
        <h1>Add Publication</h1>
        <PublicationForm />
        <div className="publications">
          <h2>Tweets</h2>
            {posts.map((publication, index) => (
                <div className='tweet' key={index}>
                  <div className='tweet_head'>
                  <h3>{publication.author}</h3> 
                  <span>{publication.nickname}</span>
                  <span>{publication.date}</span>
                  </div>
                  <img src={publication.image} alt='post' />
                  <span className='tweet_content'>"{publication.text}"</span> 
                </div>
            ))}
        </div>
      </div>
    </Provider>
  );
}

export default App;

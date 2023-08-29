import './App.css';import React, { useState, useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import store from './store/store';
import PublicationForm from "./PublicationForm";
import { AiOutlineHeart, AiOutlineRetweet, AiOutlineUpload } from 'react-icons/ai';
import { BiComment } from 'react-icons/bi'

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
                    <img className='avatar' src={publication.avatar} alt='avatar'/>
                  <h3>{publication.author}</h3> 
                  <span>{publication.nickname}</span>
                  <span>{publication.date}</span>
                  </div>
                  <img src={publication.image} alt='post' />
                  <span className='tweet_content'>"{publication.text}"</span> 
                  <div className='icons'>
                    <span>< BiComment /> 34</span>
                    <span>< AiOutlineRetweet /> 54</span>
                    <span>< AiOutlineHeart /> 76</span>
                    <span>< AiOutlineUpload /></span>
                  </div>
                </div>

            ))}
        </div>
      </div>
    </Provider>
  );
}

export default App;

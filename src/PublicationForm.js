import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPublication } from "./actions";
import style from './publication.module.css'

const authors = [
    "Green Zing", 
    "Hype Kit", 
    "Boney Nem"];

const PublicationForm = () => {
    const dispatch = useDispatch();
    const [publication, setPublication] = useState({
        author: "",
        image: "",
        text: "",
    });
    
  const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(addPublication(publication));
      setPublication({ author: "", image: "", text: "" });
    };

  return (
    <div className={style.publication}>
    <form onSubmit={handleSubmit}>
      <select
        value={publication.author}
        onChange={(e) => setPublication({ ...publication, author: e.target.value })}
      >
        <option value="">Select an author</option>
        {authors.map((author, index) => (
          <option key={index} value={author}>
            {author}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Image URL"
        value={publication.image}
        onChange={(e) => setPublication({ ...publication, image: e.target.value })}
      />
      <textarea
        placeholder="Publication text"
        value={publication.text}
        onChange={(e) => setPublication({ ...publication, text: e.target.value })}
      />
      <button type="submit">Add</button>
    </form>
    </div>
  );
};

export default PublicationForm;

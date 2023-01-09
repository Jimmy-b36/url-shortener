import React, { useRef, useState } from 'react';
import './App.css';
import shortenUrl from './helpers/urlShortener';

function App() {
  const [shortUrl, setShortUrl] = useState<string>();
  const [url, setUrl] = useState<string>();
  const formRef = useRef();
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setShortUrl(shortenUrl());
    (e.target as HTMLFormElement).reset();
  };
  return (
    <div className="App">
      <form action="" ref={formRef.current} onSubmit={handleFormSubmit}>
        <label htmlFor="url-input">Please enter a url</label>
        <input
          type="text"
          name="url-input"
          id=""
          value={url}
          onChange={e => setUrl(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
      <a href={url} target="_blank" rel="noopener">
        {shortUrl}
      </a>
    </div>
  );
}

export default App;

import React, { Fragment, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import './App.css';
import shortenUrl from './helpers/urlShortener';
import Url from './components/Url';

export type UrlsArr = {
  map(arg0: (url: UrlsArr) => JSX.Element): React.ReactNode;
  _id: string;
  url: string;
  shortUrl: string;
};

function App() {
  const urlInput = useRef('');

  const [urls, setUrls] = useState<UrlsArr>();
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const shortUrl = await shortenUrl();
    const url = urlInput.current;
    await axios.post('http://localhost:3000/api/url', { url, shortUrl });
    (e.target as HTMLFormElement).reset();
  };

  useEffect(() => {
    const fetchUrls = async () => {
      const { data }: { data: UrlsArr } = await axios.get(
        'http://localhost:3000/api/url'
      );
      setUrls(data);
    };
    fetchUrls();
  }, [urlInput.current, urls]);

  return (
    <div className="App">
      <form action="" onSubmit={handleFormSubmit}>
        <label htmlFor="url-input">Please enter a url</label>
        <input
          type="text"
          name="url-input"
          id=""
          onChange={e => (urlInput.current = e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
      {urls &&
        urls.map((url: UrlsArr) => (
          <Fragment key={url._id}>
            <Url url={url} setUrls={setUrls} />
          </Fragment>
        ))}
    </div>
  );
}

export default App;

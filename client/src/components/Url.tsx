import React, { SetStateAction } from 'react';
import { UrlsArr } from '../App';
import axios from 'axios';

const Url = ({ url, setUrls }: { url: UrlsArr; setUrls: any }) => {
  const deleteUrl = async (e: React.MouseEvent) => {
    const id = (e.target as HTMLButtonElement).id;
    await axios.delete(`http://localhost:3000/api/url/${id}`);
    const { data }: { data: UrlsArr } = await axios.get(
      'http://localhost:3000/api/url'
    );
    setUrls(data);
    return;
  };

  return (
    <>
      <label htmlFor="shortUrl">{url.url}</label>
      <a href={url.url} target="_blank" rel="noopener" className="shortUrl">
        {url.shortUrl}
      </a>
      <button id={url._id} onClick={deleteUrl}>
        Delete
      </button>
    </>
  );
};

export default Url;

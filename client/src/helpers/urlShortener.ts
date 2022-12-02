const shortenUrl = () => {
  const shortUrl = Math.random().toString(36).substring(2, 10);
  return shortUrl;
};
export default shortenUrl;

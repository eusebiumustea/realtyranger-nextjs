export const getURL = (url: string) => {
  return (
    (process.env.HOST && process.env.HOST + url) ||
    "http://localhost:3200" + url
  );
};

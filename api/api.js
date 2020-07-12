const api = (props) => {
  const { url, params = {}, ...rest } = props;
  const parsedURL = new URL(`${process.env.BASE_URL}${url}`);
  const paramsKeys = Object.keys(params);
  if (paramsKeys.length) {
    paramsKeys.forEach((key) => {
      if (params[key]) {
        parsedURL.searchParams.append(key, params[key]);
      }
    });
  }
  return fetch(parsedURL, {
    ...rest
  }).then((res) => res.json());
};

export default api;

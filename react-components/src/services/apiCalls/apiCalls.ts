export const searchCall = (searchWord: string, page: number, limit: number) => {
  const resp = fetch(
    `https://yts.mx/api/v2/list_movies.json?query_term=${searchWord}&limit=${limit}&page=${page}`
  );
  return resp;
};

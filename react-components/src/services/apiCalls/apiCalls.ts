export const initialCall = () => {
  const resp = fetch(`https://swapi.dev/api/people/`);
  return resp;
};

export const searchCall = (searchWord: string, page: number) => {
  const resp = fetch(
    `https://swapi.dev/api/people/?search=${searchWord}&page=${page}`
  );
  return resp;
};

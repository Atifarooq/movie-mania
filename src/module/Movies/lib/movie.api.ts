
export const getMovies = async (id?: number) => {
  let url = `https://633138053ea4956cfb58fa71.mockapi.io/api/v1/movie`;
  if (id) url += `/${id}`;
  const response = await fetch(url);
  return await response.json();
};

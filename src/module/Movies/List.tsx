import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../state/hook";
import Filter from "./components/Filter";
import Items from "./components/Items";
import { Movie } from "./lib/movie.type";
import { fetchMovies, filter, selectMovies } from "./lib/movies.slice";

const List = () => {
  const [fetching, setFetching] = useState(false);
  const movies: Movie[] = useAppSelector(selectMovies);
  const dispatch = useAppDispatch();

  const filterChanged = (term: string) => {
    setFetching(true);
    setTimeout(() => {
      setFetching(false);
      dispatch(filter(term));
    }, 1000); // just mocking delay to show loading spinner
  };

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <div className="grid grid-col-1">
      <Filter loading={fetching} onChange={filterChanged} />
      <Items data={movies} />
    </div>
  );
};

export default List;

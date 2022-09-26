import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Thumbnail from "../../components/Thumbnail";
import Item from "./components/Item";
import { getMovies } from "./lib/movie.api";
import { Movie } from "./lib/movie.type";

const Detail = () => {
  const param: any = useParams();
  const [movie, setMovie] = useState<Movie>({
    id: "",
    title: "",
    description: "",
    platform: "",
    category: "",
    releasedate: "",
    duration: "",
  });

  useEffect(() => {
    async function getMovie() {
      const result: Movie = await getMovies(param.id);
      setMovie({ ...result });
    }
    if (param.id) getMovie();
  }, [param]);

  return (
    <div className="grid grid-cols-2 gap-1">
      <Thumbnail
        className="rounded"
        src={`https://random.imagecdn.app/500/500?id=${Math.random()}`}
      />
      <div className="bg-white shadow">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            {movie.title}
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            {movie.platform}
          </p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <Item heading="Platform">{movie.platform}</Item>
            <Item heading="Category">{movie.category}</Item>
            <Item heading="Release Date">{movie.releasedate}</Item>
            <Item heading="Duration">{movie.duration}</Item>
            <Item heading="About">{movie.description}</Item>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Detail;

import React from "react";
import Typeahead from "../../../components/Typeahead";
import { FilterProps } from "../../../types/filter.types";

const Filter = ({ onChange, loading }: FilterProps) => {
  return (
    <div className="h-20 bg-slate-300 rounded-md p-4 my-4 relative">
      <Typeahead className="h-full w-full shadow text-lg" onChange={onChange}  />
      {loading && <div className="spinner-border animate-spin w-8 h-8 border-4 rounded-full absolute right-[23px] top-[23px]"></div>}
    </div>
  );
};

export default Filter;

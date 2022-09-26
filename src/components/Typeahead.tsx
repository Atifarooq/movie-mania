import { debounce } from "lodash";
import React, { useCallback, useEffect, useState } from "react";
import { TypeAheadProps } from "../types/typeahead.types";

const DEBOUNCE_DELAY = 500;

const Typeahead = ({ onChange }: TypeAheadProps) => {
  const [term, setTerm] = useState("");
  const delayedHandleChange = useCallback(debounce(onChange as any, DEBOUNCE_DELAY), [
    term,
  ]);
  const searchChanged = (e: any) => setTerm(e.target.value);

  useEffect(() => {
    delayedHandleChange(term);

    // Cancel the debounce on useEffect cleanup.
    return delayedHandleChange.cancel;
  }, [term, delayedHandleChange]);

  return (
      <input
        className="w-full h-full p-2 rounded"
        type="text"
        placeholder="Type to search..."
        value={term}
        onChange={searchChanged}
      />
  );
};

export default Typeahead;

import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Detail from "./module/Movies/Detail";
import List from "./module/Movies/List";

const App = () => {
  return (
    <div className="min-h-full bg-slate-200">
      <Header />
      <main className="h-full">
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <Routes>
              <Route path="/" element={<List />} />
              <Route path="/list/:id" element={<Detail />} />
            </Routes>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;

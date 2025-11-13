import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import ResultsGrid from "./components/ResultsGrid";

function App() {
  const [allMemes, setAllMemes] = useState([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

  // Fetch memes once
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        setAllMemes(data.data.memes);
      });
  }, []);

  const handleSearch = () => {
    const keyword = search.toLowerCase().trim();
    if (keyword === "") {
      setFiltered([]);
      return;
    }

    const results = allMemes.filter((item) =>
      item.name.toLowerCase().includes(keyword)
    );

    setFiltered(results);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-purple-200 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-8 mt-10">Meme Search</h1>

      <SearchBar 
        search={search} 
        setSearch={setSearch} 
        handleSearch={handleSearch} 
      />

      <ResultsGrid results={filtered} />

      {filtered.length === 0 && search !== "" && (
        <p className="mt-10 text-xl font-semibold text-red-600">
          No results found
        </p>
      )}
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";

function App() {
  const [allMemes, setAllMemes] = useState([]);     
  const [search, setSearch] = useState("");         
  const [filtered, setFiltered] = useState([]);     

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => {
        setAllMemes(data.data.memes);
      });
  }, []);

  const handleSearch = () => {
    const keyword = search.toLowerCase().trim();

    if (keyword === "") {
      setFiltered([]);
      return;
    }

    const results = allMemes.filter(item =>
      item.name.toLowerCase().includes(keyword)
    );

    setFiltered(results);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-purple-200 flex flex-col items-center p-6">

      <h1 className="text-4xl font-bold mb-8 mt-10">Emoji Search</h1>

      {/* SEARCH BAR */}
      <div className="w-full max-w-3xl flex items-center gap-3">
        <input 
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search emojis..."
          className="flex-1 px-4 py-3 border rounded-lg shadow bg-white"
        />
        
        <button 
          onClick={handleSearch}
          className="bg-black text-white px-4 py-3 rounded-lg">
          🔍
        </button>
      </div>

      {/* RESULTS */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full max-w-5xl">
        {filtered.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-xl shadow">
            <img src={item.url} alt={item.name} className="w-full h-48 object-cover rounded" />
            <h3 className="mt-3 font-semibold">{item.name}</h3>
          </div>
        ))}
      </div>

      {/* NO RESULT MESSAGE */}
      {filtered.length === 0 && search !== "" && (
        <p className="mt-10 text-xl font-semibold text-red-600">
          No results found!
        </p>
      )}

    </div>
  );
}

export default App;

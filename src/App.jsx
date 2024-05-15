import { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import axios from "axios";
import Searchbox from "./components/Search/Searchbox";
import Loading from "./components/ui/Loading";

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [cards, setCards] = useState(null);
  const [loading, setLaoding] = useState(false);
  const searchQuery = async () => {
    setLaoding(true);
    axios
      .get(
        `${import.meta.env.VITE_API_ENDPOINT}/new_search?q=${query}&pharmacyIds=1,2,3`
      )
      .then((res) => {
        setData(res.data.data.saltSuggestions);
        const cards = res.data.data.saltSuggestions.map((salt) => {
          return <Card key={salt.id} salt={salt} />;
        });
        setCards(cards);
        setLaoding(false);
      })
      .catch((err) => {
        console.log(err.message);
        setLaoding(false);
      });
  };
  return (
    <main className="min-h-screen">
      <Searchbox query={query} setQuery={setQuery} searchQuery={searchQuery} />

      {(cards && cards.length > 0) ? (
        <div className="p-10 flex flex-col gap-8 max-w-6xl m-auto">{cards}</div>
      ) : loading ? (
        <div className="flex w-full justify-center"> <Loading/></div>
      ) : (
        <div className="h-full flex items-center justify-center">
          <h1 className="text-center text-zinc-400 font-semibold">
            "Finding medicines with amazing discount"
          </h1>
        </div>
      )}
    </main>
  );
}

export default App;

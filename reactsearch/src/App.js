import {useState} from "react"
import './App.css';
import SearchBar from './Components/SearchBar';
import SearchResult from "./Components/SearchResult";


function App() {
  const [results, setResults] = useState([]);
  return (
    <div className="App">
     <div className='searchBarContainer'>
        <SearchBar setResults={setResults}/>
        <SearchResult results={results}/>
     </div>
    </div>
  );
}

export default App;

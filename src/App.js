
import './App.css';
import DictionarySearch from './DictionarySearch';
import bearPic from './bearPic.jpg';

function App() {
  return (
    <div className="App">
      <div className="Container">
      <header className="App-header">
        <img src={bearPic} className="App-logo" alt="logo" />
        <h1>Dictionary</h1>
      </header>
<DictionarySearch />
    </div>
    <footer>
        Open source code by <a href="https://github.com/jennie350/dictionary-app-react"target="_blank" rel="noreferrer" className="footer-link">Jenny Watts</a>
      </footer>
    </div>

  );
}

export default App;

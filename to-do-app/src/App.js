import logo from './logo.svg';
import './App.css';

function App() {

fetch("http://localhost:3001/lists/")
    .then(response => response.json())
    .then(data => data.map(
      entry => listNames.push(entry.title)
      ));

  const listNames = ["First List"];

  console.log(listNames);
  
  let lists = listNames.map((name) => <ul>{name}</ul>)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {lists}
        </a>
      </header>
    </div>
  );
}

export default App;

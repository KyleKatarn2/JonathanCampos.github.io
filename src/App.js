import logo from './JonathanCampos.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My name is Jonathan Campos and I'm going to master React!
        </p>
        <a
          className="App-link"
          href="https://github.com/KyleKatarn2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Me Out!
        </a>
      </header>
    </div>
  );
}

export default App;

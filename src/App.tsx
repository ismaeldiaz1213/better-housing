import logo from './logo.svg';
import './App.css';

// Define a functional component with TypeScript annotations
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload. {/* Updated to .tsx */}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

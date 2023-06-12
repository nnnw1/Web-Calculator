import logo from './logo.svg';
import './App.css';
import Calculator from './Calculator';
import CalculatorApi from './CalculatorApi';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Calculator calculatorApi={new CalculatorApi('http://127.0.0.1:8000')}></Calculator>
      </header>
    </div>
  );
}

export default App;

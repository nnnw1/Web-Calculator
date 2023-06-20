import logo from './logo.svg';
import './App.css';
import Calculator from './Calculator';
import CalculatorApi from './CalculatorApi';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Calculator calculatorApi={new CalculatorApi('http://127.0.0.1:8000')}></Calculator>
      </header>
    </div>
  );
}

export default App;

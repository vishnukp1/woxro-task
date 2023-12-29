import logo from './logo.svg';
import './App.css';
import Center from './components/Center';
import Header from './components/Header';
import Down from './components/Down';


function App() {
  return (
    <div className="text-white bg-dark">
      <Header />
     <Center />
     <Down />
    </div>
  );
}

export default App;

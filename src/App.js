import './App.css';
import Header from './Header';

function App() {
  function handleNameChanges(){
    let names = ["Salah","Bob","Karina"];
    let name = names[Math.floor(Math.random() * 3)];
    return name;
  }
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;

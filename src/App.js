import logo from './logo.svg';
import './App.css';

function App() {
  const Click=()=>
  {
    alert("LOGGED IN")
  }
  return (
    <div className="App">
      <h4>HOLA PEOPLE!</h4>
<button onClick={window['alertMsg']}>LOGIN#</button>
<h4>ALERT MESSAGE</h4>
<button onClick={window['Console']}>CLICK HERE</button>
    </div>
    
  );
}

export default App;
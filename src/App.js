
import Header from './components/Header'
import './App.css';


let array=[{color:"Red",value:"#21233f"} , {color:"green",value:"#212553f"},{color:"yellow",value:"#212666f"}]

function App() {
  return (
    <div className="App">
      <ul>{array.map((eachItem)=>(<Header eachItem={eachItem} key={eachItem.color}/>))}</ul>
    
    </div>
  );
}

export default App;

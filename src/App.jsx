import './App.scss';
import Routing from './containers/Routing/Routing';
import {HashRouter} from "react-router-dom"




function App() {
  return (
    <HashRouter basename='/'>
    <div className="App">
      <Routing/>
    </div>
    </HashRouter>
  );
}



export default App;

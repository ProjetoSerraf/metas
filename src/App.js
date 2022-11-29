import './App.css';
import FIrstComponent from './components/FirstComponente';
import Hooks from './components/Hooks';
import Images from './components/images';
import List from './components/list';
import RenderCond from './components/RenderCond';
import Fragment from './components/Fragments';

function App() {
  return (
    <div className="App">
      <h2>Hello Word</h2>
      <FIrstComponent />
      <Images />
      <Hooks />
      <List />
      <RenderCond x={10} y={5} />
      <Fragment />
    </div>
  );
}

export default App;

import './App.css';

import { Board } from './Components/board';

function App() {

const board = ["X", "X","X","X","X","X","X","X","X"]


  return (
    <div className="App">
     
<Board board={board}/>

  

    </div>
  );
}

export default App;

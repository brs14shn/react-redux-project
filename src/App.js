
import './App.css';
import { Provider } from 'react-redux';
import {getStore} from "./redux/store";

function App() {
  const store = getStore();

  return (
    <div className="App">
      <Provider store={store}>
        <h1>lsdfvf</h1>

      </Provider>
   
      
    </div>
  );
}

export default App;


import './App.css';
import { Provider } from 'react-redux';
import {getStore} from "./redux/store";
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductListing from './pages/ProductListing';
import ProductDetail from './pages/ProductDetail';



function App() {
  const store = getStore();

  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="" element={<ProductListing/>}/>
        <Route path="" element={<ProductDetail/>}/>
        {/* <Route path="*" element={<NotFound />} /> */} 
      </Routes>
      </BrowserRouter>
      </Provider>
   
      
    </div>
  );
}

export default App;

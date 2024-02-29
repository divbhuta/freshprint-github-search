import logo from './logo.svg';
import './App.css';
import {
  RouterProvider 
} from "react-router-dom";
import Header from './component/Header';
import router from './router';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

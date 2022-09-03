import {Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home/index'

function App() {
  return (
    <div className="App">
       <Header/>
     <Routes>
       <Route element={<Home/>} exact path="/"/>
      
     </Routes>
     {/* <Footer/> */}
    </div>
  );
}

export default App;

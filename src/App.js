import './App.css'
import DetailedPage from './DetailedPage/DetailedPage';
import Home from './Home'
 import { Route, Routes } from 'react-router-dom';
import Searchshow from './Search/Searchshow';
import  Layout from './Layout'
import Error from './error/Error';
function App() {
  return (
    <div className="App">
   
        <Routes>
         <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/detailed" element={<Layout><DetailedPage /></Layout>} />
        <Route path="/Search" element={<Layout><Searchshow /></Layout>} />
        <Route path="/404" element={<Layout><Error /></Layout>} />
       </Routes>
    </div>
  );
}

export default App;

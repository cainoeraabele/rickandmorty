import './App.css';
import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/HomePage';
import NoM from './pages/NoMatch';

function App() {
  return (
    <div className="App">      
    <Layout>
      <Routes>        
        <Route path="/" element={<Home/>}/>          
        <Route path="*" element={<NoM/>}/>
      </Routes>
    </Layout>
    </div>
  );
}

export default App;

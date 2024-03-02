import React from 'react'; 
import './index.css';
import App from './App';
import ReactDOM from 'react-dom/client';
import ShowComponent from './components/ShowComponent';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

export default function Index(){
  return (
    <BrowserRouter basename='/'>
    <Routes>
      <Route path="/" element={<App />} />      
      <Route path="/show" element={<ShowComponent />} />      
    </Routes>
  </BrowserRouter>
  );
}

const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index/>);

reportWebVitals();
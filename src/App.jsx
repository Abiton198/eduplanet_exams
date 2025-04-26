
import './App.css'
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage'
import ExamPage from './components/ExamPage';

function App() {
 

  return (
    <div>
      <LandingPage/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/exam" element={<ExamPage />} />
      </Routes>
    </div>
  )
}

export default App


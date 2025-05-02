import { useState } from 'react'
import StartContainer from './components/StartPage';
import Quiz from './components/Quiz';

export default function App() {
  const [currentPage, setCurrentPage] = useState('start');

  return (
    <>
      {currentPage === 'start' && <StartContainer setCurrentPage={setCurrentPage}/>}
      {currentPage === 'quiz' && <Quiz setCurrentPage={setCurrentPage}/>}
    </>
  )
}
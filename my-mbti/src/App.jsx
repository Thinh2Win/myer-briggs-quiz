import { useState, useEffect } from 'react'
import StartContainer from './components/StartPage';
import Quiz from './components/Quiz';
import ResultPage from './components/ResultPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('end');
  const [score, setScore] = useState([0, 0, 0, 0]);

  useEffect(() => {
    console.log(score);
  }, [score]);

  return (
    <>
      {currentPage === 'start' && <StartContainer setCurrentPage={setCurrentPage}/>}
      {currentPage === 'quiz' && <Quiz setCurrentPage={setCurrentPage} setScore={setScore}/>}
      {currentPage === 'end' && <ResultPage score={score}/>}
    </>
  )
}
import { useState, useEffect } from 'react'
import StartContainer from './components/StartPage';
import Quiz from './components/Quiz';
import ResultPage from './components/ResultPage';
import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('start');
  const [score, setScore] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const preloadImages = (imagePaths) => {
      imagePaths.forEach((path) => {
        const img = new Image();
        img.src = path;
      });
    };

    preloadImages([
      '/sprites/ENFJ.png',
      '/sprites/ENFP.png',
      '/sprites/ENTJ.png',
      '/sprites/ENTP.png',
      '/sprites/ESFJ.png',
      '/sprites/ESFP.png',
      '/sprites/ESTJ.png',
      '/sprites/ESTP.png',
      '/sprites/INFJ.png',
      '/sprites/INFP.png',
      '/sprites/INTJ.png',
      '/sprites/INTP.png',
      '/sprites/ISFJ.png',
      '/sprites/ISFP.png',
      '/sprites/ISTJ.png',
      '/sprites/ISTP.png',
      '/start_page.png',
      '/rave_blob.png',
      '/intro_blob.png',
      '/truckun.png',
      '/library.png',
      '/kitty_raven.png',
      '/3Start.png',
      '/3B.png',
      '/4Start.png',
      '/4C.png',
      '/evo_kitty.png',
    ])
  }, [])

  return (
    <>
      {currentPage === 'start' && <StartContainer setCurrentPage={setCurrentPage}/>}
      {currentPage === 'quiz' && <Quiz setCurrentPage={setCurrentPage} setScore={setScore}/>}
      {currentPage === 'end' && <ResultPage score={score}/>}
    </>
  )
}
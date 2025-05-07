import { useState, useEffect } from 'react'
import StartContainer from './components/StartPage';
import Quiz from './components/Quiz';
import ResultPage from './components/ResultPage';

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
      '/firstDichotomy/firstA/choiceA.png',
      '/firstDichotomy/firstA/choiceB.png',
      '/firstDichotomy/firstA/choiceC.png',
      '/firstDichotomy/firstB/choiceA.png',
      '/firstDichotomy/firstB/choiceB.png',
      '/firstDichotomy/firstB/choiceC.png',
      '/firstDichotomy/firstC/choiceA.png',
      '/firstDichotomy/firstC/choiceB.png',
      '/firstDichotomy/firstC/choiceC.png',
      '/firstDichotomy/intro_blob.png',
      '/firstDichotomy/karaoke_blob.png',
      '/firstDichotomy/party_blob.png',
      '/firstDichotomy/rave_blob.png',
      '/firstDichotomy/start_page.png',
      '/firstDichotomy/truckun.png',
      '/secondDichotomy/secondA/choiceA.png',
      '/secondDichotomy/secondA/choiceB.png',
      '/secondDichotomy/secondA/choiceC.png',
      '/secondDichotomy/secondB/choiceA.png',
      '/secondDichotomy/secondB/choiceB.png',
      '/secondDichotomy/secondB/choiceC.png',
      '/secondDichotomy/secondC/choiceA.png',
      '/secondDichotomy/secondC/choiceB.png',
      '/secondDichotomy/secondC/choiceC.png',
      '/secondDichotomy/dimsum_kitty.png',
      '/secondDichotomy/dragon_kitty.png',
      '/secondDichotomy/kitty_raven.png',
      '/secondDichotomy/kitty_stats.png',
      '/secondDichotomy/library.png',
      '/thirdDichotomy/thirdA/choiceA.png',
      '/thirdDichotomy/thirdA/choiceB.png',
      '/thirdDichotomy/thirdA/choiceC.png',
      '/thirdDichotomy/thirdB/choiceA.png',
      '/thirdDichotomy/thirdB/choiceB.png',
      '/thirdDichotomy/thirdB/choiceC.png',
      '/thirdDichotomy/thirdC/choiceA.png',
      '/thirdDichotomy/thirdC/choiceB.png',
      '/thirdDichotomy/thirdC/choiceC.png',
      '/thirdDichotomy/3A.png',
      '/thirdDichotomy/3B.png',
      '/thirdDichotomy/3C.png',
      '/thirdDichotomy/3Start.png',
      '/fourthDichotomy/fourthA/choiceA.png',
      '/fourthDichotomy/fourthA/choiceB.png',
      '/fourthDichotomy/fourthA/choiceC.png',
      '/fourthDichotomy/fourthB/choiceA.png',
      '/fourthDichotomy/fourthB/choiceB.png',
      '/fourthDichotomy/fourthB/choiceC.png',
      '/fourthDichotomy/fourthC/choiceA.png',
      '/fourthDichotomy/fourthC/choiceB.png',
      '/fourthDichotomy/fourthC/choiceC.png',
      '/fourthDichotomy/4A.png',
      '/fourthDichotomy/4B.png',
      '/fourthDichotomy/4C.png',
      '/fourthDichotomy/4Start.png',
      '/fourthDichotomy/evoKitty.png',
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
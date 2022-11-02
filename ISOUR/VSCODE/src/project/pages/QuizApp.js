import React , { useState } from 'react';
import styled from 'styled-components';
import Quiz from './Quiz';
import '../CSS/Style_Login.css';

const QuizApp = () => {
  
  const [states, setStates] = useState({
    mode: 'main',
    name: '덕구공',
    score: '44',
    quizList: [
      { question: "나는 사교적이며 활동적이다(외향형, E)", answer: "O" },
      { question: "나는 오감에 의존한다(감각형, S)", answer: "O" },
      { question: "나는 분석적이고 논리적이다(사고, T)", answer: "O" },
      { question: "나는 철처하고 계획적이다(판단형, J)", answer: "O" }
    ]
  });

  console.log("현재 모드 : " + states.mode);
  
  // 원본(함수 선언문) ▼
  function changeMode(mode) {
    setStates({ ...states, ['mode']: mode })
  }

  // 원본(화살표 함수) ▼
  // const changeMode = mode => {
  //   setStates({ ...states, ['mode']: mode })
  // };

  return (
    <div className='Container'>
    {/* mode 가 main 일 때 */}
      {states.mode === 'main' ?
      <div>
        {/* 원본 */}
        <StartButton onClick={()=>{changeMode('quiz')}}>퀴즈 시작하기</StartButton>

      </div> : null}

    {/* mode 가 quiz 일 때 */}
      {/* 원본 */}
      {states.mode === 'quiz' ? <Quiz mode={()=>changeMode('score')} quizList={states.quizList} /> : null}

    {/* mode 가 score 일 때 */}
      {/* {states.mode === 'score' ? <Score name={states.name} score={states.score} /> : null} */}
    </div>
  );
}


const StartButton = styled.button`
  text-align: center;
  border: 0;
  border-radius: 30px;
  width: 30vw;
  background: skyblue;
  color: #fff;
  font-size: 50px;
  /* 여기다가 작성 */
  margin: 30px;
  /* border: 0;
  border-radius: 15px; */
  font-size: 30px;
`;

export default QuizApp;
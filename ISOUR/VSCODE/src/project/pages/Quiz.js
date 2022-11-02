import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';

// QuizApp 의 Line 44 에서 props를 넘겨받음.
// props 1 ▶ mode={()=>changeMode('score')} 
// props 2 ▶ quizList={states.quizList}
const Quiz = (props) => {
  const [count, setCount] = useState(0);

  // QuizApp의 문제 수랑 같아지면 EndMessage를 보여줌
  if (count === props.quizList.length) {
    return (
      <EndMessage>
        <h1>Quiz END</h1>
        <button onClick={props.mode}>점수보러가기</button>
      </EndMessage>
    );
  }

  // 원본
  // const onSwipe = (direction) => {
  //   setCount(count + 1);
  // }

  // 조혜경이 만든 거 ▼
  const onClick = () => {
    setCount(count + 1);
  }
  

  return (
    // 원본 
    // <div style={{ padding: '20px' }}>
    <div>
      {props.quizList.map((e, idx) => {
        if (count === idx) {
          return (
            <NumContainer key={idx}>
              <Num>{count + 1}번 문제</Num>
              <p>{e.question}</p>
            </NumContainer>
          );
        }
      })}
      {/* <OXcontainer>
        <OX>O</OX>
        <OX>X</OX>
      </OXcontainer> */}
      <OXcontainer>
        <OX onClick={onClick}>O</OX>
        <OX onClick={onClick}>X</OX>
      </OXcontainer>

      {/*swiper가 문제당 하나씩 생기게 하기 위해 map을 사용해서 문제마다 나오게 함*/}
      {/* {props.quizList.map((l, idx) => {
        if (count === idx) {
          return (
            <>
              <SwipeItem onSwipe={onSwipe} key={idx} ></SwipeItem>
            </>
          )
        }
      })} */}
    </div>
  );
}

// 문제 
const NumContainer = styled.div`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
`;

const Num = styled.span`
  font-size: 0.8em;
  border-radius: 30px;
  background: #fef5d4;
  border: 0;
  /* 아래부터는 조혜경이 추가 */
  display: inline-block;
  width: 200px;
  height: 50px;
  margin-bottom: 500px;
`;

const OXcontainer = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    /* 원본 */
    position: absolute;
    /* position: relative; */
    top: 0;
    left: 0;
    z-index: 1;
    
`;
const OX = styled.div`
    display: flex;  
    color: skyblue;
    width: 50%;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 400px;
    /* 아래부터는 조혜경이 추가 */
    cursor: pointer;
    :hover {
      transition-duration: .5s;
      text-shadow: 10px 10px 10px rgba(0, 0, 0, 5);
    }
`;

const EndMessage = styled.div`
    text-align: center;
    & > h1{
        font-size: 100px;
    }

    & > button{
        border: 0;
        border-radius: 30px;
        width: 70%;
        background: skyblue;
        color: #fff;
        font-size: 50px;
    }
`
export default Quiz;

import { useState, useEffect } from 'react';
import TeamAPI from '../api/TeamAPI'
import styled from 'styled-components';
import { Link } from "react-router-dom";
import imgHome from '../images/home_button.png'

const MemberInfo = () => {
  const localId = window.localStorage.getItem("userId");

  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');

  const onChangePassword = e => {
    let temp_password = e.target.value;
    setPassword(temp_password);
  };

  const onClickButton = async() => {
    console.log("탈퇴하기 버튼 눌렀어요.");
    alert("정말 탈퇴하시겠습니까?ㅠㅠ");

    try {
      const res = await TeamAPI.memberDrop(localId, password);
      // 아이디와 비밀번호 확인을 위한 axios 호출
      console.log("res.data : " + res.data);
      console.log("호출 TRY: " + res.data.result);
      alert("console 확인용 알림창");

      if(res.data.result === "OK") {
        console.log("로그인한 아이디(ID) : " + localId);
        console.log("입력한 Password : " + password);
        console.log("탈퇴 완료");
        window.location.replace("/");
      } else {
        console.log("입력한 Password : " + password);
        console.log("비밀번호가 일치하지 않습니다.");
        alert('비밀번호가 일치하지 않습니다.');
      }
    } catch (e) {
      alert("오류 발생!! 아이디(" + localId +")랑 비밀번호("+ password +")는 일단 넘어와요.");
      console.log("로그인 에러!! 왜 또 안 될까..?");
    }
  }


  if(loading) { return <p>대기중...</p> }

  return(
    <>
    {/* 아이디 */}
    <div className='field-wrap'>
      <div className='input-field'>
        {/* <span style={{display: 'inline-block', width: 150}}>아이디</span> */}
        <p>내 아이디 : {localId}</p>
      </div>
    </div>

    {/* 비밀번호 */}
    <div className='field-wrap'>
      <div className='input-field'>
        <span style={{display: 'inline-block', width: 150}}>비밀번호</span>
        <input type="password" value={password} onChange={onChangePassword} />
      </div>
    </div>

    {/* 탈퇴하기 */}
    <div className='field-wrap'>
      <div className='input-field'>
        <button type="submit" onClick={onClickButton}>탈퇴하기</button>
      </div>
    </div>
  </>
  );
}
export default MemberInfo;
import nowGo from '../images/short_cut.png'

const Home = () => {

  const localId = window.localStorage.getItem("userId");
  const localPw = window.localStorage.getItem("userPw");
  const isLogin = window.localStorage.getItem("isLogin");
  if(isLogin === "FALSE") window.location.replace("/");

  const onClickMember = () => {
    console.log("회원 목록 조회 눌렀어요.");
    window.location.replace("/MemberInfo");
  }
  
  const onClickDrop = () => {
    console.log("중복확인 버튼 눌렀어요.");
    window.location.replace("/MemberDrop");
  }

  return(
    <div>
      <div className="container">
        <div className="mainhead">
          <div onClick={onClickMember}>
            <img src={nowGo} alt="화살표"/>
            <span>회원 목록 조회</span>
          </div>
          <div onClick={onClickDrop}>
            <img src={nowGo} alt="화살표" />
            <span>탈퇴하기</span>
          </div>
        </div>
        <div className="history" >
          <p>내 아이디 : {localId}</p>
          <p>내 패스워드 : {localPw}</p>
        </div>
      </div>
    </div>
  );

}

export default Home;
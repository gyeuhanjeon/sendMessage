import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './project/pages/Main';
import Login from './project/Login/Login';
// import SignUp from './project/SingUp/SignUp';
import Home from './project/HOME/Home';
import MyPage from './project/pages/MyPage';
import MemberInfo from './project/pages/MemberInfo';
import MemberDrop from './project/pages/MemberDrop';
import SignUpTest from './project/SingUp/SignUpTest';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<SignUpTest />} />
        <Route path='/home' element={<Home />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/MemberInfo' element={<MemberInfo />} />
        <Route path='/MemberDrop' element={<MemberDrop />} />
      </Routes>
    </Router>
  );
}

export default App;
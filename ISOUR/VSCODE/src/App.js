import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './project/pages/Main';
import Login from './project/Login/Login';
import Home from './project/HOME/Home';
import MyPage from './project/pages/MyPage';
import MemberInfo from './project/pages/MemberInfo';
import MemberDrop from './project/pages/MemberDrop';
import SignUp from './project/SingUp/SignUp';
import QuizApp from './project/pages/QuizApp';
import Pg1 from './project/pages/FreeTest/pg1';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/home' element={<Home />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/MemberInfo' element={<MemberInfo />} />
        <Route path='/MemberDrop' element={<MemberDrop />} />
        <Route path='/QuizApp' element={<QuizApp />} />
        <Route path='/pg' element={<Pg1 />} />
      </Routes>
    </Router>
  );
}

export default App;
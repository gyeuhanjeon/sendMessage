import { Link } from "react-router-dom";
import '../CSS/Style_Login.css';

function Main() {

    return(
        <div className="Container">
            <div> 엠비티아이셔</div>
            <span><Link to="/login"><button>시작하기</button></Link></span>
        </div>
    );
}
export default Main;
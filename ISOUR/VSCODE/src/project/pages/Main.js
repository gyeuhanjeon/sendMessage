import { Link } from "react-router-dom";

function Main() {

    return(
        <div className="Container">
            <div> 엠비티아이셔</div>
            <span><Link to="/login"><button>시작하기</button></Link></span>
        </div>
    );
}
export default Main;
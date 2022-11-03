
import { useState, useEffect } from 'react';
import TeamAPI from '../../api/TeamAPI';
import styled from 'styled-components';
import { Link } from "react-router-dom";




const Talk = () => {
    // 키보드 입력
    const localId = window.localStorage.getItem("userId");
    //storage id 를 가져오면됨
    // const [inputId, setInputId] = useState("");
    const [inputContent, setInputContent] = useState("");

    const handleOnKeyPress = e => {
        if (e.key === 'Enter') {
            onClickSend(); // Enter 입력이 되면 클릭 이벤트 실행
        }
    };

    const MemberListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3em;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        witdh: 100%;
        padding-left: 1em;
        padding-right:1em;
    }
`;
    const MemberList = styled.table`
    border-collapse: collapse;
    width: 768px;
    margin: 0 auto;
    font-size: 1.125em;
    @media screen and (max-width: 768px) {
        witdh: 100%;
    }
    th, td {
        border:1px solid #ccc;
        padding: 2px;
    }
    th {
        background-color: bisque;
    }
`;

    const MemberTitle = styled.table`
    font-size: 2em;
    text-align: center;
`;


    const [memberInfo, setMemberInfo] = useState('');
    const [loading, setLoading] = useState(false);
    const isLogin = window.localStorage.getItem("isLogin");
    if (isLogin === "FALSE") window.location.replace("/");


    const onClickMemberList = (val) => {
        console.log("회원 상세 정보로 이동 : " + val);
        window.localStorage.setItem("Detail", val);
        window.location.replace("/MemberDetail");

    }

    useEffect(() => {

        const TalkView = async () => {
            setLoading(true);
            try {
                const response = await TeamAPI.talkShow("ALL"); // 전체 회원 조회
                setMemberInfo(response.data);
                console.log(response.data)
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        };
        TalkView();
    }, []);

    // return (
    //     <MemberListBlock>
    //         <MemberList>
    //             <MemberTitle>회원 정보</MemberTitle>
    //             <tr>
    //                 <th>아이디</th><th>글내용</th><th>시간</th>
    //             </tr>
    //             {memberInfo && memberInfo.map(member => (
    //                 <tr key={member.id} onClick={() => onClickMemberList(member.id)}>
    //                     <td>{member.id}</td><td>{member.content}</td><td>{member.time}</td>
    //                 </tr>
    //             ))}
    //         </MemberList>
    //     </MemberListBlock>
    // );



    const onChangeContent = (e) => {
        setInputContent(e.target.value);
        console.log("가입 가능 여부 확인 : ", e.target.value);

    }

    const onClickSend = async (e) => {

        console.log("Click 회원가입");
        // 가입 여부 우선 확인
        const TalkInsert = await TeamAPI.talk(localId, inputContent);
        console.log("가입 가능 여부 확인 : ", TalkInsert.data);
        // 가입 여부 확인 후 가입 절차 진행
        if (TalkInsert.data.result === "OK") {
            window.location.replace("/Talk");
            // setInputContent("");

        } else {
            alert("메시지 저장 실패");
        }
    }

    return (
        <div>
            <div>
                <MemberListBlock>
                    <MemberList>
                        <MemberTitle>회원 정보</MemberTitle>
                        <tr>
                            <th>아이디</th><th>글내용</th><th>시간</th>
                        </tr>
                        {memberInfo && memberInfo.map(member => (
                            <tr key={member.id} onClick={() => onClickMemberList(member.id)}>
                                <td>{member.id}</td><td>{member.content}</td><td>{member.time}</td>
                            </tr>
                        ))}
                    </MemberList>
                </MemberListBlock>
            </div>
            <input type='text' onKeyDown={handleOnKeyPress} autoFocus value={inputContent} onChange={onChangeContent}></input>
            <button onClick={onClickSend}>보내기</button>
        </div>
    )
};


export default Talk;
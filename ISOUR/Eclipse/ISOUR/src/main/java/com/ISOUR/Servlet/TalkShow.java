package com.ISOUR.Servlet;

import java.io.*;
import java.text.DateFormat;
import java.text.SimpleDateFormat;

//import java.text.*;

import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;

import org.json.simple.*;

import com.ISOUR.Common.Common;
import com.ISOUR.DAO.MemberDAO;
import com.ISOUR.VO.MemberVO;
import com.ISOUR.VO.TalkVo;


@SuppressWarnings("serial")
@WebServlet("/TalkShow")
public class TalkShow extends HttpServlet {

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}
	
	protected void doOptions(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Common.corsResSet(response);
	}

	@SuppressWarnings("unchecked")
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// 한글 깨짐 방지를 위해서 설정
		request.setCharacterEncoding("utf-8");
		// CORS 접근 허용
		Common.corsResSet(response);
		// 요청 메시지 받기
		StringBuffer sb = Common.reqStringBuff(request);
		// 요청 받은 메시지 JSON 파싱
		JSONObject jsonObj = Common.getJsonObj(sb);
		
		
		// TeamAPI.js 에 작성해둔 cmd : "MemberInfo" 를 가져온다.
		String reqCmd = (String)jsonObj.get("cmd");
		String reqId = (String)jsonObj.get("id");
		System.out.println("전달 받은 ID2 : " + reqId);
		
		PrintWriter out = response.getWriter();
		
		// TeamAPI.js 에 작성해둔 cmd : "MemberInfo" 가 아니라면 실행될 if문
		if(!reqCmd.equals("MemberInfo")) {
			JSONObject resJson = new JSONObject();
			resJson.put("result", "TeamAPI.js에 cmd 확인 필요");
			out.print(resJson);
			return;
		}
		
		MemberDAO dao = new MemberDAO();
		System.out.println("전달 받은 ID3 : " + reqId);
		List<TalkVo> list = dao.talkShow(reqId);
		
		JSONArray memberArray = new JSONArray();
		
		for(TalkVo e : list) {
			JSONObject memberInfo = new JSONObject();
			memberInfo.put("id", e.getId());
			memberInfo.put("content", e.getContent());
//			DateFormat dateFormat = new SimpleDateFormat("YYYY-MM-dd hh:mm:ss");
//			String dateToStr = dateFormat.format(e.getTime());   // 시간을 문자열로 형변환
			memberInfo.put("time", e.getTime());
			memberArray.add(memberInfo);
		}
		System.out.println(memberArray);
		out.print(memberArray);
	}
}


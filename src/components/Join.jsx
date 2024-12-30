import { useState } from "react";
import React from "react";
import { createClient } from "@supabase/supabase-js"; // 이 부분을 주석 해제하세요.

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const Join = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  const [passWordRe, setPassWordRe] = useState("");

  // 회원가입 함수
  const UserJoin = async () => {
    try {
      if (passWord !== passWordRe) {
        throw new Error("비밀번호가 일치하지 않습니다.");
      }

      // 1. Supabase 인증 시스템에 사용자 생성
      const { user, error: signUpError } = await supabase.auth.signUp({
        email: email,
        password: passWord,
      });

      if (signUpError) {
        throw signUpError;
      }

      // 2. users 테이블에 추가 정보 삽입
      const { data, error: insertError } = await supabase
        .from("Ticket Link")
        .insert([
          {
            name: name,
            phoneNumber: phoneNumber,
            email: email,
            user_id: user.id,
          },
        ]);

      if (insertError) {
        throw insertError;
      }

      console.log("회원가입 성공:", data);
    } catch (err) {
      console.error("회원가입 실패:", err.message);
    }
  };

  return (
    <div>
      <div
        style={{
          position: "absolute",
          left: "50%",
          transform: "translate(-50%)",
          textAlign: "center",
          display: "inline-block",
          margin: "0 auto",
        }}
      >
        <img
          src="/public/ticketLinkLogoImg.png"
          style={{
            margin: "0 auto",
            maxWidth: "200px",
            minWidth: "120px",
            height: "auto",
            cursor: "pointer",
            marginTop: "8vh",
          }}
        />

        <div
          style={{
            marginTop: "2.5rem",
          }}
        >
          <input
            type="text"
            placeholder="이름을 입력해주세요"
            style={{
              width: "350px",
              padding: "10px",
              fontSize: "17px",
              borderRadius: "7px",
              height: "27px",
            }}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br />
          <input
            type="text"
            placeholder="전화번호를 입력해주세요 (-기호 제외)"
            style={{
              width: "350px",
              padding: "10px",
              fontSize: "17px",
              borderRadius: "7px",
              height: "27px",
              marginTop: "12px",
            }}
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
          <br />
          <input
            type="email"
            placeholder="이메일(아이디)을 입력해주세요"
            style={{
              width: "350px",
              padding: "10px",
              fontSize: "17px",
              borderRadius: "7px",
              height: "27px",
              marginTop: "12px",
            }}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            style={{
              width: "350px",
              padding: "10px",
              fontSize: "17px",
              borderRadius: "7px",
              height: "27px",
              marginTop: "12px",
            }}
            value={passWord}
            onChange={(e) => setPassWord(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="비밀번호를 다시 입력해주세요"
            style={{
              width: "350px",
              padding: "10px",
              fontSize: "17px",
              borderRadius: "7px",
              height: "27px",
              marginTop: "12px",
            }}
            value={passWordRe}
            onChange={(e) => setPassWordRe(e.target.value)}
          />
          <br />
          <button
            style={{
              width: "370px",
              padding: "10px",
              fontSize: "17px",
              cursor: "pointer",
              marginTop: "16px",
              fontWeight: "bold",
            }}
            onClick={UserJoin}
          >
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};

export default Join;

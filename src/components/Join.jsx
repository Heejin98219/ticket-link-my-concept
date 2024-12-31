import { useState } from "react";
import React from "react";
import { createClient } from "@supabase/supabase-js";
import supabase from "../../supabaseClient";

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
  const JoinTicketLink = async () => {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: passWord,
      options: {
        data: {
          user_metadata: {
            name: name,
            phoneNumber: phoneNumber,
          },
        },
      },
    });

    if (error) {
      alert("가입 x");
    } else {
      alert("성공");
      const error = await supabase.from("Ticket Link").insert({
        data: data.TicketLink.email,
        name: name,
      });
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
            onClick={JoinTicketLink}
          >
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};

export default Join;

import React from "react";
const FindId = () => {
  return (
    <div>
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
              type="email"
              placeholder="이름을 입력해주세요"
              style={{
                width: "350px",
                padding: "10px",
                fontSize: "17px",
                borderRadius: "7px",
                height: "27px",
              }}
            />
            <br />
            <input
              type="password"
              placeholder="전화번호를 입력해주세요 (-기호 제외)"
              style={{
                width: "350px",
                padding: "10px",
                fontSize: "17px",
                borderRadius: "7px",
                height: "27px",
                marginTop: "12px",
              }}
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
            >
              아이디 찾기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindId;

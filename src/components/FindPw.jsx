const FindPw = () => {
  return (
    <div>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <img
          src="/ticketLinkLogoImg.png"
          style={{
            width: "150px",
            height: "65px",
            cursor: "pointer",
            marginTop: "108px",
          }}
        />
      </div>

      <div
        style={{
          marginTop: "2.5rem",
          textAlign: "center",
        }}
      >
        <input
          type="text"
          placeholder="이름을 입력해주세요"
          style={{
            width: "350px",
            height: "50px",
            borderRadius: "10px",
            padding: "0px 15px 0px 15px",
            fontSize: "17px",
          }}
        />
        <br />
        <input
          type="text"
          placeholder="휴대폰 번호를 입력해주세요 (- 기호 제외)"
          style={{
            width: "350px",
            height: "50px",
            borderRadius: "10px",
            padding: "0px 15px 0px 15px",
            fontSize: "17px",
            marginTop: "7px",
          }}
        />
        <br />
        <input
          type="email"
          placeholder="이메일을 입력해주세요"
          style={{
            width: "350px",
            height: "50px",
            borderRadius: "10px",
            padding: "0px 15px 0px 15px",
            fontSize: "17px",
            marginTop: "7px",
          }}
        />
        <br />
        <input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          style={{
            width: "350px",
            height: "50px",
            borderRadius: "10px",
            padding: "0px 15px 0px 15px",
            fontSize: "17px",
            marginTop: "7px",
          }}
        />
        <br />
        <input
          type="password"
          placeholder="비밀번호를 다시 입력해주세요"
          style={{
            width: "350px",
            height: "50px",
            borderRadius: "10px",
            padding: "0px 15px 0px 15px",
            fontSize: "17px",
            marginTop: "7px",
          }}
        />
        <br />
        <button
          style={{
            width: "385px",
            height: "50px",
            borderRadius: "10px",
            fontSize: "20px",
            marginTop: "10px",
            fontWeight: "bold",
            backgroundColor: "#ccc",
            cursor: "pointer",
          }}
        >
          비밀번호 변경
        </button>
      </div>
    </div>
  );
};

export default FindPw;

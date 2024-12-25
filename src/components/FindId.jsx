const FindId = () => {
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
          type="email"
          placeholder="이메일을 입력해주세요"
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
          아이디 찾기
        </button>
      </div>
    </div>
  );
};

export default FindId;

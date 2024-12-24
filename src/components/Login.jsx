const Login = () => {
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
          border: "2px solid green",
          marginTop: "2.5rem",
        }}
      >
        <input
          type="text"
          placeholder="이메일을 입력해주세요"
          style={{
            width: "250px",
          }}
        />
        <br />
        <input type="password" placeholder="비밀번호를 입력해주세요" />
        <br />
        <button>로그인</button>
      </div>
    </div>
  );
};

export default Login;

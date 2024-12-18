const TopMenus = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <img
          src="../../public/ticketLinkLogoImg.png"
          style={{
            width: "150px",
            height: "65px,",
            cursor: "pointer",
            marginTop: "1rem",
          }}
        />
        <div>
          <ul
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "350px",
              alignItems: "center",
              height: "100%",
            }}
          >
            <li
              style={{
                display: "inline-block",
                cursor: "pointer",
              }}
            >
              로그인
            </li>
            <li
              style={{
                display: "inline-block",
                cursor: "pointer",
              }}
            >
              회원가입
            </li>
            <li
              style={{
                display: "inline-block",
                cursor: "pointer",
              }}
            >
              예매취소/확인
            </li>
            <li
              style={{
                display: "inline-block",
                cursor: "pointer",
              }}
            >
              문의하기
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopMenus;

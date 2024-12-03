const TopMenus = () => {
  return (
    <div>
      <div
        style={{
          border: "3px solid blue",
          textAlign: "right",
        }}
      >
        <ul
          style={{
            position: "relative",
            left: "65%",
            display: "flex",
            justifyContent: "space-evenly",
            width: "450px",
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
  );
};

export default TopMenus;

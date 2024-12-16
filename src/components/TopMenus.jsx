const TopMenus = () => {
  return (
    <div>
      <div
        style={{
          border: "3px solid blue", //
          display: "flex",
          justifyContent: "right",
        }}
      >
        <ul
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            border: "2px solid green", //
            width: "500px",
          }}
        >
          <li
            style={{
              display: "inline-block",
              cursor: "pointer",
              padding: " 2px 0px 2px 0px",
            }}
          >
            로그인
          </li>
          <li
            style={{
              display: "inline-block",
              cursor: "pointer",
              padding: " 2px 0px 2px 0px",
            }}
          >
            회원가입
          </li>
          <li
            style={{
              display: "inline-block",
              cursor: "pointer",
              padding: " 2px 0px 2px 0px",
            }}
          >
            예매취소/확인
          </li>
          <li
            style={{
              display: "inline-block",
              cursor: "pointer",
              padding: " 2px 0px 2px 0px",
            }}
          >
            문의하기
          </li>
        </ul>
        {/* <hr> 태그
        모양처럼 생긴 <div>태그 입니다. */}
        <div
          style={{
            borderTop: "1px solid #000",
            margin: "10px 0",
            width: "100%",
          }}
        ></div>
      </div>
    </div>
  );
};

export default TopMenus;

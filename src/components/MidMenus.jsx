const MidMenus = () => {
  return (
    <div>
      <div>
        <ul
          style={{
            border: "3px solid red",
            display: "flex",
            fontSize: "30px",
            margin: "0 auto",
            justifyContent: "space-evenly",
          }}
        >
          <li
            style={{
              cursor: "pointer",
            }}
          >
            공연
          </li>
          <li
            style={{
              cursor: "pointer",
            }}
          >
            전시
          </li>
          <li
            style={{
              cursor: "pointer",
            }}
          >
            지역
          </li>
          <li
            style={{
              cursor: "pointer",
            }}
          >
            랭킹
          </li>
          <li
            style={{
              cursor: "pointer",
            }}
          >
            기획전
          </li>
          <li
            style={{
              cursor: "pointer",
            }}
          >
            이벤트
          </li>
          <li
            style={{
              cursor: "pointer",
            }}
          >
            VIP
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MidMenus;

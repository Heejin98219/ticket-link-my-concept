import { Link, useNavigate } from "react-router-dom"; // `useNavigate` 추가

const TopMenus = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <img
          src="/ticketLinkLogoImg.png" // 경로 수정
          style={{
            width: "150px",
            height: "65px", // 쉼표 제거
            cursor: "pointer",
            marginTop: "1rem",
          }}
        />
        <div>
          <ul
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "270px",
              alignItems: "center",
              height: "100%",
            }}
          >
            <li
              style={{
                display: "inline-block",
                cursor: "pointer",
              }}
              onClick={() => navigate("/login")}
            >
              <span
                style={{
                  fontSize: "14px",
                }}
              >
                KOR&nbsp;▼&nbsp;
              </span>
            </li>
            <li
              style={{
                display: "inline-block",
                cursor: "pointer",
              }}
              onClick={() => navigate("/login")}
            >
              로그인
            </li>
            <li
              style={{
                display: "inline-block",
                cursor: "pointer",
              }}
              onClick={() => navigate("/join")}
            >
              회원가입
            </li>
            <li
              style={{
                display: "inline-block",
                cursor: "pointer",
              }}
            >
              <Link
                to={"https://www.ticketlink.co.kr/help/main"}
                target="_blank" // 새 탭에서 열기
                style={{
                  color: "black",
                  textDecoration: "none",
                }}
              >
                고객센터
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopMenus;

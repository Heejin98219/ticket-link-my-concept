import { Link } from "react-router-dom";

const TicketList = () => {
  return (
    <div>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "3rem 0rem 3rem 0rem",
        }}
      >
        <li
          style={{
            display: "inline-block",
            fontSize: "27px",
          }}
        >
          오픈 예정
        </li>
        <li
          style={{
            // display: "inline-block",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          }}
        >
          전체 보기
        </li>
      </ul>

      {/* 페이크 데이터를 사용한
      공연 리스트 입니다. */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginBottom: "3rem",
        }}
      >
        <div>
          <Link to="https://www.ticketlink.co.kr/product/52808">
            <img
              src="http://image.toast.com/aaaaab/ticketlink/TKL_10/main1023(3).jpg"
              style={{ width: "300px", height: "460px", marginBottom: "10px" }}
            />
          </Link>
          <br />
          <p>INFINITE 15TH ANNIVERSARY CONCE ...</p>
        </div>
        <div>
          <Link to="https://www.ticketlink.co.kr/product/51557">
            <img
              src="http://image.toast.com/aaaaab/ticketlink/TKL_7/nam_main_0820.jpg"
              style={{ width: "300px", height: "460px", marginBottom: "10px" }}
            ></img>
          </Link>
          <br />
          <p>2024 NAM WOO HYUN CONCERT &#60; ...</p>
        </div>
        <div>
          <Link to="https://www.ticketlink.co.kr/product/50692">
            <img
              src="http://image.toast.com/aaaaab/ticketlink/TKL_6/main0716(3).jpg"
              style={{ width: "300px", height: "460px", marginBottom: "10px" }}
            ></img>
          </Link>
          <br />
          <p>2024 KIM SUNG KYU CONCERT &#91;LV3 : ...</p>
        </div>
        <div>
          <Link to="https://www.ticketlink.co.kr/product/47723">
            <img
              src="http://image.toast.com/aaaaab/ticketlink/TKL_9/MAIN_POSTER_0102.jpg"
              style={{ width: "300px", height: "460px", marginBottom: "10px" }}
            ></img>
          </Link>
          <br />
          <p>2024 KIM SUNG KYU FAN MEETING &#91; ...</p>
        </div>
        <div>
          <Link to="https://www.ticketlink.co.kr/product/36976">
            <img
              src="http://image.toast.com/aaaaab/ticketlink/TKL_7/leesungyeol_main.jpg"
              style={{ width: "300px", height: "460px", marginBottom: "10px" }}
            ></img>
          </Link>
          <br />
          <p>2022 이성열 팬미팅 〈The loeYeol〉</p>
        </div>
      </div>

      {/* 2열 */}
      {/* 페이크 데이터를 사용한
      공연 리스트 입니다. */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginBottom: "3rem",
        }}
      >
        <div>
          <Link to="https://www.ticketlink.co.kr/product/51991">
            <img
              src="http://image.toast.com/aaaaab/ticketlink/TKL_9/LL_PST_0909_1814.jpg"
              style={{ width: "300px", height: "460px", marginBottom: "10px" }}
            />
          </Link>
          <br />
          <p>2024 러블리즈 10주년 콘서트 &#60;겨울 ...</p>
        </div>
        <div>
          <Link to="https://www.ticketlink.co.kr/product/38788">
            <img
              src="http://image.toast.com/aaaaab/ticketlink/TKL_6/poster(220915)a.jpg"
              style={{ width: "300px", height: "460px", marginBottom: "10px" }}
            />
          </Link>
          <br />
          <p>뮤지컬 〈킹키부츠〉</p>
        </div>
        <div>
          <Link to="https://www.ticketlink.co.kr/product/40653">
            <img
              src="http://image.toast.com/aaaaab/ticketlink/TKL_10/kim_poster_1006.jpg"
              style={{ width: "300px", height: "460px", marginBottom: "10px" }}
            />
          </Link>
          <br />
          <p>2022 KIM SUNG KYU Fan Meeting</p>
        </div>
        <div>
          <Link to="https://www.ticketlink.co.kr/product/42045">
            <img
              src="http://image.toast.com/aaaaab/ticketlink/TKL_6/main01091419.jpg"
              style={{ width: "300px", height: "460px", marginBottom: "10px" }}
            />
          </Link>
          <br />
          <p>2024 KIM SUNG KYU FAN MEETING &#91; ...</p>
        </div>
        <div>
          <Link to="https://www.ticketlink.co.kr/product/41096">
            <img
              src="http://image.toast.com/aaaaab/ticketlink/TKL_3/ksk_main_1107.jpg"
              style={{ width: "300px", height: "460px", marginBottom: "10px" }}
            />
          </Link>
          <br />
          <p>김성규 공식 팬클럽 성규특별시 시민 2 ... </p>
        </div>
      </div>

      {/* 3열 */}
      {/* 페이크 데이터를 사용한
      공연 리스트 입니다. */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginBottom: "3rem",
        }}
      >
        <div>
          <Link to="https://www.ticketlink.co.kr/product/49356">
            <img
              src="http://image.toast.com/aaaaab/ticketlink/TKL_10/MEGAFIELD_pst_0326.jpg"
              style={{ width: "300px", height: "460px", marginBottom: "10px" }}
            />
          </Link>
          <br />
          <p>메가필드뮤직페스티벌 2024</p>
        </div>
        <div>
          <Link to="https://www.ticketlink.co.kr/product/37096">
            <img
              src="http://image.toast.com/aaaaab/ticketlink/TKL_8/jr_pst0103.jpg"
              style={{ width: "300px", height: "460px", marginBottom: "10px" }}
            />
          </Link>
          <br />
          <p>뮤지컬 〈잭더리퍼〉- 대구</p>
        </div>
        <div>
          <Link to="https://www.ticketlink.co.kr/product/37306">
            <img
              src="http://image.toast.com/aaaaab/ticketlink/TKL_8/jr_pst0103.jpg"
              style={{ width: "300px", height: "460px", marginBottom: "10px" }}
            />
          </Link>
          <br />
          <p>뮤지컬 〈잭더리퍼〉 - 청주</p>
        </div>
        <div>
          <Link to="https://www.ticketlink.co.kr/product/27913">
            <img
              src="http://image.toast.com/aaaaab/ticketlink/TKL_7/theday_main_0411.jpg"
              style={{ width: "300px", height: "460px", marginBottom: "10px" }}
            />
          </Link>
          <br />
          <p>뮤지컬 그날들 - 대구</p>
        </div>
        <div>
          <Link to="https://www.ticketlink.co.kr/product/32999">
            <img
              src="http://image.toast.com/aaaaab/ticketlink/TKL_10/comeback_200910.jpg"
              style={{ width: "300px", height: "460px", marginBottom: "10px" }}
            />
          </Link>
          <br />
          <p>뮤지컬 〈귀환〉 온라인 생중계 - 온라인 ...</p>
        </div>
      </div>
    </div>
  );
};

export default TicketList;

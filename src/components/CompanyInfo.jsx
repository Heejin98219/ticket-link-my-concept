const CompanyInfo = () => {
  return (
    <div>
      <div
        style={{
          borderTop: "3px solid black",
        }}
      ></div>

      <div>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "400px",
          }}
        >
          <li>이용약관</li>
          <li>개인정보 처리방침</li>
          <li>이메일 무단수집</li>
        </ul>
      </div>

      <div>
        <ul
          style={{
            textAlign: "center",
          }}
        >
          <li>회사명: 엔에치엔링크 주식회사</li>
          <li>대표이사: 왕문주</li>
          <li>사업자 등록번호: 144-81-25090</li>
          <li>주소: 서울특별시 강남구 강남대로 586, 제이빌 06043</li>
          <li>개인정보보호 책임자: 서상훈</li>
          <li>© NHN LINK Corporation. All rights reserved.</li>
        </ul>
      </div>
    </div>
  );
};

export default CompanyInfo;

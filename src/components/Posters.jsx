import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Posters = () => {
  const slideRef = useRef(null);
  const [currentImgIdx, setCurrentImgIdx] = useState(0);
  const IMG_WIDTH = 800;
  const slideRange = currentImgIdx * IMG_WIDTH;
  useEffect(() => {
    slideRef.current.style.transition = "all 1s ease-in-out";
    slideRef.current.style.transform = `translateX(-${slideRange}px)`;
  }, [currentImgIdx]);

  const moveToNextSlide = () => {
    if (currentImgIdx == 1) return;
    setCurrentImgIdx(currentImgIdx + 1);
  };
  const moveToPrevSlide = () => {
    if (currentImgIdx == 0) return;
    setCurrentImgIdx(currentImgIdx - 1);
  };

  const Container = styled.div`
    display: flex;
    margin-left: 200px;
  `;

  const Wrapper = styled.div`
    width: 800px;
    height: 200px;
    overflow: hidden;
    margin: 20px 80px;
  `;

  const SlideWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
  `;

  const Dash = styled.div`
    width: 800px;
    height: 200px;
    flex: none; // 이 속성을 넣어야 화면에 1개씩 보여진다.
  `;

  return (
    <div>
      <Container>
        <button onClick={moveToPrevSlide}></button>
        <Wrapper>
          <SlideWrapper ref={slideRef}>
            <Dash>
              <div className="dashboard-right">
                <div className="dashboard-title">
                  <h1
                    style={{
                      fontWeight: "bold",
                      fontSize: "50px",
                      color: "blue",
                    }}
                  >
                    Billim
                  </h1>
                </div>
                <div
                  style={{ marginTop: "20px" }}
                  className="dashboard-decoration"
                >
                  <div style={{ marginBottom: "50px", fontSize: "30px" }}>
                    <p>언제어디서든지 상품을</p> <br />
                    <p>
                      <span
                        style={{
                          color: "blue",
                          fontSize: "35px",
                          fontWeight: "bold",
                        }}
                      >
                        대여
                      </span>{" "}
                      해주고
                      <span
                        style={{
                          color: "blue",
                          fontSize: "35px",
                          fontWeight: "bold",
                        }}
                      >
                        {" "}
                        대여
                      </span>{" "}
                      받을 수 있는 서비스입니다.
                    </p>
                  </div>
                </div>
              </div>
            </Dash>
            <Dash>
              <div className="dashboard-right">
                <div className="dashboard-title">
                  <h1
                    style={{
                      fontWeight: "bold",
                      fontSize: "50px",
                      color: "blue",
                    }}
                  >
                    Billim
                  </h1>
                </div>
                <div
                  style={{ marginTop: "20px" }}
                  className="dashboard-decoration"
                >
                  <div style={{ marginBottom: "50px", fontSize: "30px" }}>
                    <p>Billim이 처음이시라면?</p>
                    <br />
                    <a>서비스 이용방법 보러가기</a>
                  </div>
                </div>
              </div>
            </Dash>
          </SlideWrapper>
        </Wrapper>
        <button onClick={moveToNextSlide}></button>
      </Container>
    </div>
  );
};

export default Posters;

import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

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
    justify-content: center;
    border: 2px solid red;
  `;

  const Wrapper = styled.div`
    width: 1000px;
    height: 500px;
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
        <button
          onClick={moveToPrevSlide}
          style={{
            cursor: "pointer",
            border: "transparent",
            backgroundColor: "transparent",
          }}
        >
          <FontAwesomeIcon icon={faChevronLeft} size="2xl" />
        </button>
        <Wrapper>
          <SlideWrapper ref={slideRef}>
            <Dash>
              <img
                src="http://image.toast.com/aaaaab/ticketlink/TKL_7/fever_main0921.jpg"
                style={{
                  width: "1000px",
                  height: "500px",
                  backgroundSize: "cover",
                }}
              />
            </Dash>
            <Dash>456</Dash>
          </SlideWrapper>
        </Wrapper>
        <button
          onClick={moveToNextSlide}
          style={{
            cursor: "pointer",
            border: "transparent",
            backgroundColor: "transparent",
          }}
        >
          <FontAwesomeIcon icon={faChevronRight} size="2xl" />
        </button>
      </Container>
    </div>
  );
};

export default Posters;

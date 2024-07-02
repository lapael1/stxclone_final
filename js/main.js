window.onload = function () {
  // 비주얼 이동 버튼 스크롤 기능================
  // 변수 선언
  const visualButton = document.querySelector(".visual-bt");
  visualButton.addEventListener("click", function () {
    //  scrollToSection()함수는 특정 섹션으로 부드럽게 스크롤하는 기능
    scrollToSection("#business");
  });
  //   scrollToSection()함수 작성
  function scrollToSection(sectionId) {
    // console.log(sectionId);
    // sectionId로 지정된 요소를 찾아서 section변수에 저장
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
  // top버튼 스크롤 기능=======================
  const topBtn = document.getElementById("top-btn");
  topBtn.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(window.scrollY);
    if (window.scrollY == 0) {
      window.scrollTo({
        top: 2777,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  });
  //화살표 이미지 회전
  const topBtnImg = document.getElementById("top-btn-img");
  window.addEventListener("scroll", function (scTop) {
    scTop = window.document.documentElement.scrollTop;
    if (scTop > 0) {
      topBtnImg.classList.add("up");
    } else {
      topBtnImg.classList.remove("up");
    }
  });
  // 모달창(안내창)=======================
  const body = document.querySelector("body");
  const modal = document.querySelector(".modal-wrap");
  const modalClose = document.querySelector(".modal-close");
  // isOpen 값에 따라 스크롤을 제어하는 함수
  function controlScroll(isOpen) {
    if (isOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }
  // 초기 모달창 상태 설정
  const isOpen = true;
  controlScroll(isOpen);
  modalClose.addEventListener("click", function () {
    modal.style.display = "none";
    // 모달창이 닫힐 때는 스크롤을 다시 활성화
    controlScroll(false);
  });
};

const projectCard =
  document.getElementById("retentionProject");

const modal =
  document.getElementById("projectModal");

const closeButton =
  document.getElementById("modalClose");

const closeBottom =
  document.getElementById("modalCloseBottom");

const overlay =
  document.getElementById("modalOverlay");


function openModal() {
  modal.classList.add("active");

  document.body.style.overflow = "hidden";
}


function closeModal() {
  modal.classList.remove("active");

  document.body.style.overflow = "";
}


projectCard.addEventListener(
  "click",
  openModal
);


closeButton.addEventListener(
  "click",
  closeModal
);


closeBottom.addEventListener(
  "click",
  closeModal
);


overlay.addEventListener(
  "click",
  closeModal
);


/* ESC 누르면 모달 닫기 */

document.addEventListener(
  "keydown",
  function(event) {

    if (event.key === "Escape") {
      closeModal();
    }

  }
);
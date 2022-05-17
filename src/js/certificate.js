(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open-c]"),
      closeModalBtn: document.querySelector("[data-modal-close-c]"),
      modal: document.querySelector("[data-modal-c]"),
    };
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();

    (() => {
        const refs = {
            openMenuBtn: document.querySelector('[data-menu-open]'),
            closeMenuBtn: document.querySelector('[be-like]'),
            closeMenuLink: document.querySelector('[like-be]'),
            closeMenuBox: document.querySelector('[love-you]'),
            closeMenuSize: document.querySelector('[list-size]'),
            closeMenuList: document.querySelector('[list-like]'),
            menu: document.querySelector('[data-menu]'),
        };

        refs.openMenuBtn.addEventListener('click', toggleModal);
        refs.closeMenuBtn.addEventListener('click', toggleModal);
        refs.closeMenuLink.addEventListener('click', toggleModal);
        refs.closeMenuBox.addEventListener('click', toggleModal);
        refs.closeMenuSize.addEventListener('click', toggleModal);
        refs.closeMenuList.addEventListener('click', toggleModal);
        function toggleModal() {
            document.body.classList.toggle("modal-open")
            refs.menu.classList.toggle('is-open');
        }
    })();
    const header = document.querySelector(".header-scroll");
        window.addEventListener("scroll", () => {
            window.scrollY > 10
                ? header.classList.add("header--filled")
                : header.classList.remove("header--filled");
        })



const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}



(() => {
const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    };

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
    document.body.classList.toggle("modal-open")
    refs.modal.classList.toggle("is-hidden");
    }
})();


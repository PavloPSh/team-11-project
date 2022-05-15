
    (() => {
        const refs = {
            openMenuBtn: document.querySelector('[data-menu-open]'),
            closeMenuBtn: document.querySelector('[data-menu-close]'),
            menu: document.querySelector('[data-menu]'),
        };

        refs.openMenuBtn.addEventListener('click', toggleModal);
        refs.closeMenuBtn.addEventListener('click', toggleModal);

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

$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 2000);
    });
});


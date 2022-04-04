document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = document.querySelector('.scrollto').offsetHeight;
        // const topOffset = 0; // если не нужен отступ сверху 
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        if (menuIcon.classList.contains('active')) {
            document.body.classList.remove('lock')
            menuIcon.classList.remove('active');
            menuBur.classList.remove('active');
        }

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});


const menuIcon = document.querySelector(".menu_icon");
const menuBur = document.querySelector(".menu_burger");
if (menuIcon) {
	menuIcon.addEventListener("click", function() {
		document.body.classList.toggle('lock')
		menuIcon.classList.toggle('active');
		menuBur.classList.toggle('active');
	})
}
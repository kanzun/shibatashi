/* 以下はメニューバーの処理 */
const menuBar = document.querySelector('.menu-bar');
const menuToggle = document.querySelector('.menu-toggle');
const menuLinks = menuBar.querySelectorAll('a');

menuToggle.addEventListener('click', () => {
    menuBar.classList.toggle('active');
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuBar.classList.remove('active');
    });
});
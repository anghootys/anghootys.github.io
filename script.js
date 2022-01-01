// back to top button
const backToTop_btn = document.querySelector('.back-to-top');
const hamburger_btn = document.querySelector('.hamburger-btn');

backToTop_btn.addEventListener('click', function () {
    window.scrollTo(0, 0);
})

document.addEventListener('scroll', function () {

    if (window.scrollY >= 500) {
        backToTop_btn.classList.add("show")
    } else {
        backToTop_btn.classList.remove('show')
    }
    
    if (window.scrollY >= 200) {
        hamburger_btn.classList.add('has-background')
    } else {
        hamburger_btn.classList.remove('has-background')
    }
})

// toggle sidebar-menu 
const header_hamburger_btn = document.querySelector('button.hamburger-btn');
const sidebar_menu = document.querySelector('.sidebar-menu');
const closeSidebar_btn = document.querySelector('.close-sidebar-menu');

header_hamburger_btn.addEventListener("click", toggleSidebarMenu);
closeSidebar_btn.addEventListener("click", toggleSidebarMenu);

function toggleSidebarMenu() {  
    sidebar_menu.classList.toggle("show");
}
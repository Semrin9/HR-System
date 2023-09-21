const parentLinks = document.querySelectorAll('.parent-link');
var navLinks = document.querySelectorAll(".nav-link");
const sidebarToggler = document.querySelector('.sidebar-toggler');
const sidebar = document.querySelector('.sidebar');


navLinks.forEach(function (link, index) {
    link.addEventListener("click", function () {
        // Remove active class from all links
        navLinks.forEach(function (navLink) {
            navLink.classList.remove("active");
        });

        // Add active class to the clicked link
        this.classList.add("active");


        const plusIcon = link.querySelector('.nav-link-plus-icon');
        const minusIcon = link.querySelector('.nav-link-minus-icon');

        if (plusIcon.classList.contains('nav-link-plus-icon-hidden')) {
            plusIcon.classList.remove('nav-link-plus-icon-hidden');
            minusIcon.classList.add('nav-link-plus-icon-hidden');
            
        } else {
            plusIcon.classList.add('nav-link-plus-icon-hidden');
            minusIcon.classList.remove('nav-link-plus-icon-hidden');
        }
    });
});

parentLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        const expandList = link.closest('.nav-item').querySelector('.nav-link-expand');
        expandList.classList.toggle('nav-link-expand-hidden');

        // Prevent the link from navigating when clicked
        event.preventDefault();
    });
});

sidebarToggler.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-change');
});
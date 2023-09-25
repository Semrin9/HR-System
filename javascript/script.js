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



// Table Related

const search = document.querySelector('.input-group input'),
tableRows = document.querySelectorAll('tbody tr'),
tableHeadings = document.querySelectorAll('thead th');

// Searching for specific data of HTML table
search.addEventListener('input', searchTable);

function searchTable() {
    tableRows.forEach((row, i) => {
        let tableData = row.textContent.toLowerCase(),
            searchData = search.value.toLowerCase();

        row.classList.toggle('hide', tableData.indexOf(searchData) < 0);
        row.style.setProperty('--delay', i / 25 + 's');
    })

    document.querySelectorAll('tbody tr:not(.hide)').forEach((visibleRow, i) => {
        visibleRow.style.backgroundColor = (i % 2 == 0) ? 'transparent' : '#0000000b';
    });  //fix this
}


// Sorting | Ordering data of HTML table
tableHeadings.forEach((head, i) => {
    let sort_asc = true;
    head.onclick = () => {
        tableHeadings.forEach(head => head.classList.remove('active'));
        head.classList.add('active');

        document.querySelectorAll('td').forEach(td => td.classList.remove('active'));
        tableRows.forEach(row => {
            row.querySelectorAll('td')[i].classList.add('active');
        })

        head.classList.toggle('asc', sort_asc);
        sort_asc = head.classList.contains('asc') ? false : true;

        sortTable(i, sort_asc);
    }
})


function sortTable(column, sort_asc) {
    [...tableRows].sort((a, b) => {
        let firstRow = a.querySelectorAll('td')[column].textContent.toLowerCase(),
            secondRow = b.querySelectorAll('td')[column].textContent.toLowerCase();

        return sort_asc ? (firstRow < secondRow ? 1 : -1) : (firstRow < secondRow ? -1 : 1);
    })
        .map(sortedRow => document.querySelector('tbody').appendChild(sortedRow));
}
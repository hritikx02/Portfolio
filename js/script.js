let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');
let scrollTimeout;

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
}

function onClickRead(element) {
    element.style.display = 'none';
    const nextElement = document.getElementById('active-rm');
    if (nextElement) {
        nextElement.classList.add('expanded'); // Add class to show content
    }
}

// Collapse the "Read More" content on scroll with delay
window.addEventListener('scroll', () => {
    const expandedContent = document.getElementById('active-rm');
    const readMoreButton = document.querySelector('#read-more');

    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
        if (expandedContent && expandedContent.classList.contains('expanded')) {
            expandedContent.classList.remove('expanded'); // Remove class to collapse
            readMoreButton.style.display = 'inline-block'; // Show the "Read More" button again
        }
    }, 5000);
});
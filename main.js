'use-strict';

// This next block of code runs after the document loads.
(() => {
    // Get toggle and burger elements
    const toggle = document.querySelector('.toggle');
    const dropdown = document.querySelector('.dropdown');
    const dropdownOpenClass = 'dropdown-open';

    // Add toggle event listner
    toggle.addEventListener('click', () => {
      dropdown.classList.toggle(dropdownOpenClass);
    });

    // Add close menu on click away event listner to window
    window.addEventListener('click', (event) => {
      if (!dropdown.contains(event.target)) {
        dropdown.classList.remove(dropdownOpenClass);
      }
    });
})();

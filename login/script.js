document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Function to set dark mode
    function setDarkMode(enabled) {
        if (enabled) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    }

    // Toggle dark mode based on user preference
    darkModeToggle.addEventListener('change', () => {
        const darkModeEnabled = darkModeToggle.checked;
        localStorage.setItem('darkModeEnabled', darkModeEnabled);
        setDarkMode(darkModeEnabled);
    });

    // Initialize dark mode based on user preference
    const darkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';
    darkModeToggle.checked = darkModeEnabled;
    setDarkMode(darkModeEnabled);
});

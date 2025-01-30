function updateCopyrightDate() {
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.getElementById('copyright');
    if (copyrightElement) {
        copyrightElement.textContent = `© ${currentYear} Your Company Name. All rights reserved.`;
    }
}

// Call the function to update the date when the page loads
window.onload = updateCopyrightDate;
function copyUrl() {
    const url = document.getElementById('url');
    
    // Select the text for mobile compatibility
    url.select();
    url.setSelectionRange(0, 99999); 

    // Use Clipboard API to copy the text
    navigator.clipboard.writeText(url.value)
    .then(() => {
        // Show confirmation message
        document.getElementById('message').style.display = 'block';
    })
    .catch(err => {
        console.error('Failed to copy text: ', err);
    });
}
document.getElementById('copyBtn').addEventListener('click', copyUrl);
document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', () => {
        const query = document.getElementById('query').value;
        const fileType = document.getElementById('fileType').value;
        const domain = document.getElementById('domain').value;
        const operator = document.getElementById('operator').value;
        
        // Make an API request to the serverless function with query parameters
        fetch(`/api/searchDorks?query=${query}&fileType=${fileType}&domain=${domain}&operator=${operator}`)
            .then(response => response.json())
            .then(data => {
                // Display search results
                const resultsDiv = document.getElementById('results');
                resultsDiv.innerHTML = JSON.stringify(data, null, 2);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
});

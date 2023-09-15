// functions/searchDorks.js
exports.handler = async (event, context) => {
    const query = event.queryStringParameters.query;
    const fileType = event.queryStringParameters.fileType || '';
    const domain = event.queryStringParameters.domain || '';
    const operator = event.queryStringParameters.operator || '';

    // Build the Google search URL based on query parameters
    const searchUrl = `https://www.google.com/search?q=${query}${fileType ? `+filetype:${fileType}` : ''}${domain ? `+site:${domain}` : ''}${operator ? `+${operator}` : ''}`;

    try {
        // Perform the Google search and parse the results
        // You can use libraries like 'node-fetch' or 'axios' for making HTTP requests
        // Parse the search results and return them as needed
        const results = await fetch(searchUrl);
        const data = await results.text();

        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'An error occurred' }),
        };
    }
};

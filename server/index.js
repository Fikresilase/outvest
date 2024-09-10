const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

// Your Benzinga API token
const API_TOKEN = 'YOUR_TOKEN_HERE';

// Endpoint to fetch the ratings data
app.get('/', async (req, res) => {
    try {
        const response = await axios.get(
            'http://api.benzinga.com/api/v2/calendar/ratings', {
            params: {
                token:a888191b223241b3b51b8,
                ratings: 'Upgrades'
            },
            headers: {
                'accept': 'application/json'
            }
        });

        // Send the fetched data as a response
        res.json(response.data);
    } catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).send('Error fetching ratings data');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

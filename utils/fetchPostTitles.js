const axios = require('axios');
const cheerio = require('cheerio');
const URL = 'https://forums.redflagdeals.com/hot-deals-f9/';

async function fetchPostTitles() {
    try {
        const response = await axios.get(URL);
        const html = response.data;
        const $ = cheerio.load(html);
        const postTitles = [];

        $('.topic_title_link').each((index, element) => {
            const postTitle = $(element).text().trim();
            postTitles.push(postTitle);
        });

        return postTitles;
    } catch (error) {
        console.error(error);
        return []; // Return an empty array or handle the error as needed
    }
}

module.exports = { fetchPostTitles };

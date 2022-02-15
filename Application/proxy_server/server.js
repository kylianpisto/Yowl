const express = require('express'); // Import Express web server framework
const axios = require('axios'); // Import axios
const cheerio = require('cheerio'); // Import cheerio
const cors = require('cors') // Import cors

const dictio = { // Create a dictionary of the websites
    uberEats: 'https://fr.trustpilot.com/review/ubereats.com',
    total: 'https://fr.trustpilot.com/review/totalenergies.fr',
    theNorthFace: 'https://fr.trustpilot.com/review/www.thenorthface.com',
    tesla: 'https://fr.trustpilot.com/review/tesla.com',
    nike: 'https://fr.trustpilot.com/review/nike.com',
    netflix: 'https://fr.trustpilot.com/review/netflix.fr',
    microsoft: 'https://fr.trustpilot.com/review/microsoft.fr',
    meta: 'https://fr.trustpilot.com/review/facebook.com',
    mcdo: 'https://fr.trustpilot.com/review/mcdonalds.fr',
    hM: 'https://fr.trustpilot.com/review/hm.fr',
    gucci: 'https://fr.trustpilot.com/review/gucci.com',
    google: 'https://fr.trustpilot.com/review/google.fr',
    deliveroo: 'https://fr.trustpilot.com/review/deliveroo.fr',
    burgerKing: 'https://fr.trustpilot.com/review/burgerking.fr',
    apple: 'https://fr.trustpilot.com/review/apple.fr',
    amazon: 'https://fr.trustpilot.com/review/apple.fr',
}
const app = express(); // Create an Express application
app.use(cors()) // Use CORS policy
app.get("/", function(req, res) { // Create a GET route at /
    doScrapp(req.query.search) // Call doScrapp function with the search parameter
    .then(data => { // When the promise is resolved
        res.json({ // Send the data as a JSON response
            data: data // The data is the array of reviews
        })
    });
})
app.listen(9001, function() { // Launch the server on port 9001
    console.log("Server started on port 9001"); // Display a message in the console
})
async function doScrapp(search) { // Create a function that will do the scrapp
    const res = await axios.get(dictio[search]); // Get the HTML code of the page
    const $ = cheerio.load(res.data); // Load the HTML code in cheerio
    const shelves = []; // Create an empty array to store the reviews
    const pseudos = []; // Create an empty array to store pseudos
    $('article.paper_paper__1PY90').each((_idx, element) => { // For each pseudo
        const shelf = $(element) // Get the pseudo
        let title = shelf.find('div.typography_typography__QgicV').text() // Get the title
        title = title.split("avisFRActualisé")[0]
        title = title.split("avisFRll")[0]
        for (let i=0;i <= 30;i++) {
            title = title.split("avisFR" + i)[0]
        }     
        pseudos.push(title) // Push the title in the array
    });
    const posts = []; // Create an empty array to store posts
    $('h2.typography_typography__QgicV').each((_idx, element) => { // For each post
        const shelf = $(element) // Get the post
        let title = shelf.find('a.link_internal__7XN06').text() // Get the title
        posts.push(title) // Push the title in the array
    });
    const reviews = []; // Create an empty array to store reviews
    $('div.styles_reviewContent__0Q2Tg').each((_idx, element) => { // For each review
        const shelf = $(element) // Get the review
        let title = shelf.find('p.typography_typography__QgicV').text() // Get the title

        title = title.split("Date")[0]

        if (title.length == 0) {
            title = "Ce commentaire est vide mais yowly me dit que ce commentaire est peu être dans le titre"
        }

        reviews.push(title) // Push the title in the array
    });

    pseudos.forEach((pseudo, i) => { // For each pseudo
        shelves.push({"pseudo": pseudo, "post": posts[i], "review": reviews[i]}) // Push the pseudo, post and review into the array
    });
    return shelves; // Return the array of shelves
}
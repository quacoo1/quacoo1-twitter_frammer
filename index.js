const path = require('path');
const Twitter = require('twitter');
const express = require('express');
const server = express();
const PORT = 8000;
 
const client = new Twitter({
  consumer_key: 'XseE2kDXzHGJj2ZE6dNcqHo7F',
  consumer_secret: 'X5ONTGAHaiRUGd8KYkfRUTZycjIj2oV4X7aB5AlGCL6gmApm9a',
  bearer_token:'AAAAAAAAAAAAAAAAAAAAAMNcAwEAAAAA8kLCMi0iEua2ndJYBj1R0gNSbLA%3DcLrau6T77iZAXlhB0MPVSgWIIgSBNiJq28Dlx8GJOhRr3orzkC',
});

 
`access_token_key: '1192414920425558019-8V6GjQBpr7baNMunDgLV4SHpkc8laA',
  access_token_secret: 'eaadG3CybNbKPPNwjAqgU1Rp30eex99uAdotC2D5T2f39'`

server.use(express.static(path.join(__dirname, 'public')));
// respond with "hello world" when a GET request is made to the homepage

server.get('/json/:id', function (req, res) {

    // let params = {id: '1391414682947395585'};
    let params = {id: req.params.id};
    console.log(params.id)
    client.get('statuses/show', params, function(error, tweets, response) {
        if (!error) {
            res.json(tweets);
            console.log(tweets);

        }else{
            res.json(error);
        }
    });
  })

server.listen(PORT, () => {
    console.log(`Server running at http://127.0.0.1:${PORT}/`);
})
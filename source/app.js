const express = require('express');
const app = express();
const client = require('./postgres');
const axios = require('axios');

app.set('view engine', 'ejs');//embedded javascript
app.use(express.static('public'));//middleware
app.use(express.urlencoded({ extended: true }));//middleware

app.listen(3100);
client.connect();
client.on("connect",()=>{
    
    console.log("postgreql connected");
})

axios.get('https://api.wazirx.com/api/v2/tickers')
.then(response => {
  client.query(' DELETE FROM api_data;')
 
  const jsonData = response.data;
  
  client.query('CREATE TABLE IF NOT EXISTS api_data (id SERIAL PRIMARY KEY, data JSONB);')
    .then(() => {
      client.query('INSERT INTO api_data (data) VALUES ($1)', [JSON.stringify(jsonData)])
        .then(() => console.log('JSON data stored in PostgreSQL'))
        .catch(error => console.log('Error storing JSON data in PostgreSQL:', error));
    })
    .catch(error => console.log('Error creating "api_data" table in PostgreSQL:', error));
})
.catch(error => console.log('Error retrieving API data from WazirX API:', error));

app.get('/',(req, res) => {
    client.query('SELECT data FROM api_data;')
      .then(result => {
        const apiData = result.rows[0].data;
        const apiDataKeys = Object.keys(apiData).slice(0, 10);
        //console.log(apiData[apiDataKeys[1]].last);
        res.render('index', { data: apiData ,keys:apiDataKeys});
      })
      .catch(error => {
        console.log('Error retrieving API data from PostgreSQL:', error);
        res.status(500).send('Error retrieving API data from PostgreSQL');
      });
  
  });


  // yfiiwrx chrwrx runewrx dockwrx maticwrx adawrx enjwrx linkwrx ltcwrx  bnbwrx  
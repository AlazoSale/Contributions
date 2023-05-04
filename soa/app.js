const express=require('express');
const app = express();
const client = require('./postgres');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.listen(3500);
client.connect();

app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/b',async(req,res)=>{
    try {
        const result = await client.query('SELECT DISTINCT author FROM public."Book" WHERE cast (price as integer) BETWEEN 170 AND 300;');
        const data = result.rows;
        console.log(data);
        res.render('1', { data });
      } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching data');
      }
});
app.get('/c', async (req,res)=>{
    try {
        const query = "SELECT \"Customer\".phone FROM public.\"Customer\" INNER JOIN public.\"Book\" ON \"Customer\".\"Cust_id\" = \"Book\".\"Cust_id\" WHERE \"Book\".author = 'John';";
        ;
        const result = await client.query(query);
        const data = result.rows;
        console.log(data);
        res.render('2', { data });
      } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching data');
      }
});
app.get('/d', async (req,res)=>{
    try {
        const result = await client.query("DELETE FROM \"Book\" WHERE price = '430';");
        res.render('3');
      } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching data');
      }
});
app.get('/display', async (req, res) => {
    try {
      const result1 = await client.query('SELECT book_name, author, price, quantity, "Cust_id" FROM public."Book";');
      const data1 = result1.rows;
      console.log(data1);
      const result2 = await client.query('SELECT "Cust_id", "Cust_name", "Address", phone FROM public."Customer";');
      const data2 = result2.rows;
      console.log(data2);
      res.render('4', { data1,data2 });
    } catch (err) {
      console.error(err);
      res.status(500).send('Error fetching data');
    }
  });


/* 
INSERT INTO public."Book"(
	book_name, author, price, quantity, "Cust_id")
	VALUES ('The Overpriced Book', 'John', '430', '1', '5');


SELECT DISTINCT author FROM Book WHERE price BETWEEN 170 AND 300;
SELECT Customer.phone FROM Customer INNER JOIN Book ON Customer.Cust_id = Book.Cust_id WHERE Book.author = 'John';
DELETE FROM Book WHERE price = 430; 

SELECT "Cust_id", "Cust_name", "Address", phone
	FROM public."Customer";
SELECT book_name, author, price, quantity, "Cust_id"
	FROM public."Book";



*/














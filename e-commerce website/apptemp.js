
const client = require('./postgresql');
client.connect();
client.query(`INSERT INTO "try" ("Name", "Product_ID","Product_Type","Contact","Product_MRP","Location") VALUES ('pong', '12','boots','123123','990','por');`, (err, result) => {
    if (!err) {
        console.log(result.rows);
    }else{
        console.log('error');
    }
});
client.query("SELECT * FROM public.try;", (err, result) => {
    if (!err) {
        console.log(result.rows);
    }
    client.end();
});


//SELECT name, rollno, class FROM public.try;

//INSERT INTO public.try(
//	"Name", "Product_ID", "Product_Type", "Contact", "Product_MRP", "Location")
//	VALUES ('alazo','21', 'clothe', '982932', '299', 'dimapur');

//'supong', '12','boots','123123','990','por'
//Select * From "Book";

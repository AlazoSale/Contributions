const { Client } = require('pg');

const client = new Client({
    host:"	floppy.db.elephantsql.com (floppy-01)",
    user:"rohveird",
    password:"iSGjLr__GeejLV_xfpSgc6Cy6M__Ei3L",
    database:"rohveird",
    connectionString: "postgres://rohveird:iSGjLr__GeejLV_xfpSgc6Cy6M__Ei3L@floppy.db.elephantsql.com/rohveird",
});


module.exports=client;



const mongodb           =       require('mongodb');
const dbhost			= 		process.env.DBHOST;
const dbname			=		process.env.DBNAME;


function connectDb() {
    return mongodb.MongoClient.connect(dbhost) 
        .then(client => {
            return client.db(dbname);
        });
}

module.exports = connectDb;
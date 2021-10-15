const db = require("mongoose");

const dbConnection = async () => {
    await db.connect("mongodb://localhost:27017/cometchat");
}

dbConnection().catch(err => console.log(err));
const express = require('express');
require("./DB/connection");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();

/*
    Please read the README.md file to learn about all of the apis in this package.
 */


app.use([
    express.json(),
    cookieParser(),
    cors({
        credentials: true,
        origin: "http://localhost:3000"    // Use this if you're using react.
    }),
    require("./Routers/routes")
])


app.listen(3001, () => {
    console.log("your server is running on 3000")
})
const jwt = require('jsonwebtoken');
const ACCESS_TOKEN_SECRET = "b83f7ce37ea0676d3798254fa8e48cd59e1a4fdc3e7db6c7aeb80471af378de757c0e4f357a0272ac454fd746cb56c843518c3f0af2547681294cb7e72120a439c0114bee45d8109bfb23c0720c6341c4e784b922c8beb43f6ea999cffb37c8619d9d1282110ae139bddde89347d1cbcb4431cba18711eb69f7f229ccd3a8003b8b9f9eb132adf6664eeda75b7f329ea459a1570d46ab2064adac945ddad7df8593959a1aa9901dfefac7b7531ddb8c5dc363ad3d23ada4a9868d124ac645a9ccd5ca455a8b811db5338fbb83d44fdc28cdb8a333642beaf2d5d83ca3b69297e400b5df265363cc16b45364da62d2d88457511564c4d11ecded40b849d5e91894b01059fb267d41eb864b90bfc083c78c6bec17bc1c5bd20b717a694f7f1256b4925548f980d0a645fa5c2898a11520e0cc180e3cc0c3a49cbf3bd4b71472cb118888c8521eb93430fd5736725ea97d024cc823cc6ea9a0cc519b188cb455a142b5efd4f23d2258889b5f34e9cc7427b9031bdd9b421b14aa9aed9d21d2e231db077fff0dc71e44f9949d4a282c1df984912e1b03c74c35509101c0bc1fd03b69c1962182283defa9ab230293e3551b27c4091641de58d01718bd534929c1be7fb50a0f6bbc7ca45ead03d770984cc90fdb102983548ede1cbae8e1b684a4d55b255168f249a467e95841aaed4a1b46e40cc6fe0"
// for production we put this secret in file for that we use environment variable

const user = (req, res, next) => {
    const token = req.cookies.accesstoken;
    if (!token) {
        return res.status(401).json({"error": "Unauthorized"})
    } else {
        jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) {
                return res.status(401).json({"error": "token is not verified"});
            } else {
                if (req.originalUrl === "/user/verifyUser") return res.status(202).json({"isLogin": true, user});
                req.user = user;
                next();
            }
        });
    }
}

module.exports = user;
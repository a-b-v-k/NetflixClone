const jwt = require("jsonwebtoken");

function verify(req, res, next) {
    const authHeader = req.headers.token;

    if(authHeader){
        const token = authHeader.split(" ")[1];

        try{
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            req.user = decoded;
            next();
        } catch(err)
        {
            res.status(401).json("Invalid token");
        }

    } else{
        return res.status(401).json("You are not authenticated..");
    }
}

module.exports = verify;
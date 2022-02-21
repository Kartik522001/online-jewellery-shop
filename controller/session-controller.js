const fs = require('fs');

function login(req,res){
    let loginHtml = fs.readFileSync("./view/Login.html");
    res.write(loginHtml);
    res.end();
}

function signup(req,res){
    let signupHtml = fs.readFileSync("./view/Signup.html");
    res.write(signupHtml);
    res.end();
}

function saveuser(req,res){
    console.log(req.body);

    res.json({
        msg : "User Data Are Saved",
        status : 200,
        data : req.body
    })
}

module.exports.login = login
module.exports.signup = signup
module.exports.saveuser = saveuser
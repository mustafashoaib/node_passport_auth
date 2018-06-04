/**
 * Created by maizy on 5/24/18.
 */

var express = require("express");
var router = express.Router();
var passport = require("passport");
var jwt = require("jsonwebtoken");

router.get("/login",function (req, res, next) {
    passport.authenticate(
        "local",
        {
            session:false
        },function (err,user,info) { // verify callback for the passport optional passport send by default 401 if error else process next handler if success\
            console.log("After auth");
            console.log(err);
            console.log(user);
            console.log(info);
            res.send("AUTH in progress " + info.message);
        }
    )(req,res,next);
});

module.exports= router;
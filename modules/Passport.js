/**
 * Created by maizy on 5/24/18.
 */


const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;


passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    }, // optional parameters for the auth field
    function (email, password, cb) {
        console.log(email);
        console.log(password);
        cb(null,{
            id: "45445454",
            username:"mustafa",
            password: "mustafa123"
        },{message:"LogedIn successfully"});
    }
));

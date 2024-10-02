//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.urlencoded({extended: true}));


var ValidUser = false;

function passwordCheck(req, res, next) {
    const password = req.body['password'];

    if(password == 'ILoveProgramming'){
        ValidUser = true;
    }
    next();
}

app.use(passwordCheck);



app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`);
});

app.post('/check', (req, res) => {
    if(ValidUser) {
        res.sendFile(__dirname + "/public/secret.html");
    }else{
        res.redirect("/");
    }
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

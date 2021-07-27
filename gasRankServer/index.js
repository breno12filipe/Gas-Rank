const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require("./connection");
const md5 = require('md5');

/*
 * JSON TEMPLATE FOR USER. by HeadMaster
 * {
 *   "eml": "userEmail",
 *   "psw": "password"
 * }
 */

// Qualquer texto que venha no corpo da requisição será interpretado
app.use(bodyParser.json())


// requisição com corpo usando body parser
app.post('/regUser', (req, res, next) => {
    // res.send(req.body)
    // console.log(req.body)
    (async () => {    
        //const db = require("./connection")
        //const result =  db.insertUser(req.body['email'], req.body['psw']);
        const result = db.insertUser(req.body)
        res.send("User registered successfully")
    })();    
    next()
})


app.post('/usrLogin', function(request, response) {
	var email = request.body['eml'];
	var password = md5(request.body['psw']);	
	if (email && password) {
		db.conn.query('SELECT * FROM tb_user WHERE email = ? AND password = ?',
                        [email, password], function(error, results, fields) {
			if (results.length > 0) {
				response.send('User Logged!');
				console.log('User Logged!')
			} else {
				response.send('Incorrect Username and/or Password!');
				console.log('Incorrect Username and/or Password!')
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		console.log('Please enter Username and Password!')
		response.end();
	}
});



// REF: https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color
app.listen(3000, console.log("\x1b[36m%s\x1b[0m", "SERVER LISTENING PORT:" + "\x1b[31m" + "3000"));

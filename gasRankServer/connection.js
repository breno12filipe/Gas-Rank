var mysql = require('mysql2');
var md5 = require('md5')

const conn = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "headmaster",
  password: "root",
  database: "gasRank"
});


async function insertUser(user){
    //const conn = await connect();
    //console.log(user)
    const sql = 'INSERT INTO tb_user (email, password) VALUES (?,?);';
    const values = [user['eml'], md5(user['psw'])];
    return await conn.query(sql, values, (error) => {
        if (error){
            return reject(error);
        }
    });
}

/*
 * Temos que retornar true ou false, se o usuário existe ou não    
 */
async function loginUser(user){
    const sql = "SELECT email, password FROM tb_user WHERE email = '?' AND password = '?';"
    const values = [user['eml'], md5(user['psw'])];
    return await conn.query(sql, values, (error) => {
        if(error){
            return reject(error)
        }
        
        console.log(values)
    })

}

module.exports  = { insertUser, loginUser, conn }
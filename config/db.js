const mysql = require("mysql2/promise")

const connectDB = async()=>{
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test',
    password: 'Bazarragchaa89@',
  });
//   console.log("hello")
 return connection
}
let db = connectDB()

module.exports = db
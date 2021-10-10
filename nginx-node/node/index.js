const express = require('express')
const faker = require('faker')
const app = express()
const port = 3000
const config = {
    host: 'mysql',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

app.get('/', (req, res) => {
    const name = faker.name.findName()
  
    connection.query(`INSERT INTO user (name) VALUES ('${name}')`)
  
    connection.query(`SELECT name FROM user`, (error, results, fields) => {
      
      if (!results.length) {
        throw new HttpException(404, 'Users not found');
      }

      res.send(`
        <h1>Full Cycle Rocks!</h1>
        <ol>
          ${results.map(el => `<li>${el.name}</li>`).join('')}
        </ol>
      `)
    })
  })


  app.listen(port, () => {
    console.log('Up on:', port);
  })
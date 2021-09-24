const express = require('express') // เรียกใช้ Express
const mysql = require('mysql') // เรียกใช้ mysql
const db = mysql.createConnection({   // config ค่าการเชื่อมต่อฐานข้อมูล
    host: '206.189.150.227',
    port: '3308',
    user: 'root',
    password: 'root1234',
    database: 'db'
})
db.connect() // เชื่อมต่อฐานข้อมูล
const app = express() // สร้าง Object เก็บไว้ในตัวแปร app เพื่อนำไปใช้งาน
// Select Data
app.get('/users', (req, res) => {   // Router เวลาเรียกใช้งาน
    let sql = 'SELECT * FROM fulluser'  // คำสั่ง sql
    let query = db.query(sql, (err, results) => { // สั่ง Query คำสั่ง sql
        if (err) throw err  // ดัก error
        console.log(results) // แสดงผล บน Console 
        res.json(results)   // สร้างผลลัพธ์เป็น JSON ส่งออกไปบน Browser

    })
})
app.get('/profile', (req, res) => {
    let sql1 = 'SELECT * FROM user'
    let query = db.query(sql1, (err, results) => {
        if (err) throw err
        console.log(results)
        res.json(results)
    })
})
app.listen('8000', () => {     //

    console.log('start port 8000')
})
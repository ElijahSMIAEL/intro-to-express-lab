import express from "express";

import {students} from './data/students-data.js'



const app = express()


app.set('view engine', 'ejs')



app.get('/', function(req, res) {
  res.redirect('/students')
})

app.get('/students', function(req, res) {
  res.render('students/index', {
    students: students
  })
})


app.listen(3000, function() {
  console.log('listening on port 3000')
})
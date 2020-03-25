const express = require('express')
const router = express.Router()
const db = require('../database/db')
router
    .route('/')
    .get((req, res) => {
        const query = 'SELECT * FROM todos'
        db.query(query, (err, result) => {
            if (err) throw err;
            console.log(result)
            res.render('home', {
                data: result
            })
        })
    })
    .post((req, res) => {
        console.log(req.body)
        const query = `INSERT INTO todos(title, body, Auth, date) VALUES('${req.body.title}', '${req.body.body}', '${req.body.Auth}', '${new Date().toLocaleString()}')`;
        db.query(query, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.redirect('/')
        })
    })

router
    .route('/addPost')
    .get((req, res) => {
        res.render('addPost', {
            url: '/',
            method: 'POST'
        })
    })

router
    .route('/todo/edit/:id')
    .get((req, res)=> {
        db.query(`SELECT * FROM todos WHERE id=${Number(req.params.id)}`, (err, data)=> {
            if(err) throw err;
            console.log(data[0].body)
            res.render('addPost', {data: data[0], url: '/todo/edit/', method:'POST'})
        })
    })
    .post((req, res) => {
        const query = `UPDATE todos SET title='${req.body.title}', body='${req.body.body}', Auth='${req.body.Auth}', date = '${new Date().toLocaleString()}' where id=${req.params.id}`
        db.query(query, (err, result) => {
            if (err) throw err;
            res.redirect('/')
        })
    })

router
    .route('/todo/delete/:id')
    .get((req, res) => {
        console.log(req.params.id)
        const query = `DELETE FROM todos WHERE id=${Number(req.params.id)}`;
        db.query(query, (err, data) => {
            if (err) throw err;
            res.redirect('/')
        })
    })


module.exports = router;
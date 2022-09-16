'use strict'

const util = require('util')
// const mysql = require('mysql')
const db = require('../database')

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM users'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    post: (req, res) => {
        let sql = 'SELECT * FROM users'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    }, 
    detail: (req, res) => {
        let sql = 'SELECT * FROM users WHERE id = ?'
        db.query(sql, [req.params.id], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })
    },
    update: (req, res) => {
        let data = req.body;
        let userID = req.params.id;
        let username = req.params.username;
        let email = req.params.email;
        let password = req.params.password;
        let sql = 'UPDATE users SET username = ?, email=?, password=? WHERE id = ?';
        //UPDATE `users` SET `user_name` = 'user22', `email` = 'user22@gmail.com', `password` = '1234567' WHERE `users`.`id` = 2;
        db.query(sql, [data,username, email, password, userID], (err, response) => {
            if (err) throw err
            res.json({message: 'Update success! ' + username + " " + email + " " + password})
        })
    },

    insert: (req, res) => {
        let data = req.body;
        let sql = 'INSERT INTO users (id, username, email, password) VALUES (NULL, ?, ?, ?)'
        //INSERT INTO `users` (`id`, `user_name`, `email`, `password`) VALUES (NULL, 'user2', 'user2@gmail.com', '123456');
        db.query(sql, [data], (err, response) => {
            if (err) throw err
            res.json({message: 'Insert success!'})
        })
    },
    delete: (req, res) => {
        let userID = req.params.id;
        let sql = 'DELETE FROM users WHERE id = ?'
        console.log(userID);
        db.query(sql, [userID], (err, response) => {
            if (err) throw err
            res.json({message: 'Delete success! '})
        })
    }
}

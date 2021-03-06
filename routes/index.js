﻿var express = require('express');
var router = express.Router();
var standupCtrl = require('../controller/standup.server.controller');

/* GET home page. */
router.get('/', function (req, res) {
    // res.render('index', { title: 'Express' });
    return standupCtrl.list(req, res);
});

router.get('/index', function (req, res) {
    // res.render('index', { title: 'Express' });
    return standupCtrl.list(req, res);
});

router.get('/web', function (req, res) {
    // return res.sendFile('web.html');
    return res.render('../public/web.html');
});

router.post('/', function (req, res) {
    return standupCtrl.filterByMember(req, res);
});

/* GET New Note page. */
router.get('/newnote', function (req, res) {
    return standupCtrl.getNote(req, res);
});

/* POST New Note page. */
router.post('/newnote', function (req, res) {
    return standupCtrl.create(req, res);
});

module.exports = router;

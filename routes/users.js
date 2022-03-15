const router = require('express').Router(); 
const express = require('express');
<<<<<<< HEAD
const router = express.Router();
=======
>>>>>>> masterbranch

const users = [{name: 'Linus', email: 'linus@mail.com'}]

router.get('/', (_, res) => {
    res.send('Your Express App');
});

router.get('/users', (_, res) => {
    res.json({ ok: true, users });
});

router.get('/user/:name', (req, res) => {
    const { name } = req.params;
    const user = users.filter((user) => user.name === name)[0];
    res.json({ ok: true, user });
});


router.post('/adduser', (req, res) => {
    const { name, email } = req.body;
    if (name && email) {
        users.push({ name, email});
        res.json({ ok: true, users });
    } 
});

module.exports = router;
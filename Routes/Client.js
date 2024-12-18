const express = require('express');
const router = express.Router();
const { signUp, deleteClient, resetPassword, signIn, resetUserName } = require('../Controllers/Client');
const { signUpValidations , validator } = require('../Middleware/Validator');
const isAuth = require('../Middleware/isAuth');

router.post('/signUp', signUpValidations() , validator , signUp);
router.post('/signIn', signIn);
router.delete('/delete/:_id', deleteClient); 
router.put('/reset-password/:_id', resetPassword);
router.put('/reset-userName/:_id', resetUserName);
router.post("/current", isAuth, (req, res) => {
    res.status(200).send({ client: req.client });
});

module.exports = router;
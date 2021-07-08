const express = require('express');
const router = express.Router();
const controller = require('../controllers/userReg.controller');
const auth = require('../middleware/auth')

module.exports = function () {
  router.post('/register', controller.register);
  router.post('/login', controller.login);
  router.post('/tokenvalid', controller.tokenValid);
  router.get('/', auth, controller.userLog);
  router.post('/ckeckStatus',controller.ckeckStatus);
  router.get('/profile/:email', controller.getProfile);
  router.put('/update-profile/:email', controller.updateProfile)

  return router;
}
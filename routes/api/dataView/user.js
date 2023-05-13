const router = require("express").Router();
const {handleLogin, getAllUsers} = require("../../../controllers/user/user.controller.js");

router.get('/getall', getAllUsers)
router.post('/auth', handleLogin)


module.exports = router;
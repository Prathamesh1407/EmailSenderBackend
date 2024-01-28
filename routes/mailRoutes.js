const router=require('express').Router();
const { mail } = require('../controllers/Mail');


router.post('/sendmail',mail);

module.exports=router;
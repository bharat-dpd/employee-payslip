const router = require('express').Router();
const controllers = require('../controllers');
router.post('/payslip', controllers.payslip.handler);

module.exports = router;

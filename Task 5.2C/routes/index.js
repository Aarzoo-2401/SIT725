const express = require('express');
const router = express.Router();

const projectsRouter = require('./projectRoute');

router.use('/projects', projectsRouter);

module.exports = router;


//module.exports = {
//    projectController:require('./projectController')
//}
const { projectController } = require('../controllers');
const { Project } = require('../models');

/**
 * This method is responsible to either get all the users form
 * @param {*} userId
 */

const projectService = {
    getAllProjects: async()=>{
        return await Project.find();
    }
}

module.exports = projectService
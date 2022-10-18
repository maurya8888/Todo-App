const { Tasks } = require('../models');

exports.name = 'Tasks';
exports.index = async function (req, res) {
    const tasks = await Tasks.findAll();
    res.render('index', { title: 'Todo App', Tasks: tasks })
};
exports.create_task = async function(req, res) {
    const { task } = req.body;

    try {
        await Tasks.create({ name:task });
        res.redirect('/');
    } catch ( error ) {
        return res.status(500).json(error);
    }
}
exports.delete_task = async function(req, res) {
    const { uuid } = req.body;
    
    try {
        await Tasks.destroy({
            where: {
                uuid: uuid
            }
        })
        res.redirect('/');
    } catch ( error ) {
        return res.status(500).json(error);
    }
}
exports.update_task = async function(req, res) {
    const { isComplete } = req.body;
    
    try {
        await Tasks.update({ isComplete: isComplete == 'on' ? true:false }, {
            where: {
              uuid: req.params.uuid
            }
          });
        res.redirect('/');
    } catch ( error ) {
        return res.status(500).json(error);
    }
}
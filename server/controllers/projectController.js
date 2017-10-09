var projectModel = require('../models/projectModel.js');

module.exports = {

    list: function (req, res) {
        projectModel.find(function (err, projects) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting project.',
                    error: err
                });
            }
            return res.json(projects);
        });
    },

    show: function (req, res) {
        var id = req.params.id;
        projectModel.findOne({_id: id}, function (err, project) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting project.',
                    error: err
                });
            }
            if (!project) {
                return res.status(404).json({
                    message: 'No such project'
                });
            }
            return res.json(project);
        });
    },

    create: function (req, res) {
      var project = new projectModel({
			name : req.body.project.name,
			quantity : req.body.project.quantity,
			fin : req.body.project.fin

        });

        project.save(function (err, project) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating project',
                    error: err
                });
            }
            return res.status(201).json(project);
        });
    },

    update: function (req, res) {
        var id = req.params.id;
        projectModel.findOne({_id: id}, function (err, project) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting project',
                    error: err
                });
            }
            if (!project) {
                return res.status(404).json({
                    message: 'No such project'
                });
            }

            project.name = req.body.name ? req.body.name : project.name;
			      project.quantity = req.body.quantity ? req.body.quantity : project.quantity;
			      project.fin = req.body.fin ? req.body.fin : project.fin;

            project.save(function (err, project) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating project.',
                        error: err
                    });
                }

                return res.json(project);
            });
        });
    },

    remove: function (req, res) {
        var id = req.params.id;
        console.log(id)
        projectModel.findByIdAndRemove(id, function (err, project) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the project.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};

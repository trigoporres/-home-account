const projectModel = require('../models/projectModel.js');

module.exports = {

    list: function (req, res, next) {
        projectModel.find({creator:req.user._id})
          .then(listProject =>
              res.status(200).json(listProject))
          .reject(err => res.status(500).json(err));
    },

    show: function (req, res, next) {
        projectModel.findOne({_id: req.params.id})
          .then( oneProject =>
                res.status(200).json(oneProject))
          .reject(err =>
                res.status(500).json({
                message: 'Error when getting project.'})
              )
          .reject(err =>
                res.status(404).json({
                message: 'No such project'}));
    },

    create: function (req, res, next) {
      const project = new projectModel({
        creator  : req.body.project.creator,
			  name     : req.body.project.name,
			  quantity : req.body.project.quantity,
			  fin      : req.body.project.fin
        });
        project.save()
          .then (project =>
            {res.status(201).json({message: 'New project created¡', project});
          })
          .catch(err =>
            {res.status(500).json({err:err, message: 'Cannot create project'});
          });
    },

    update: function (req, res, next) {
        const update ={
          name     : req.body.name,
          quantity : req.body.quantity,
          fin      : req.body.fin,
        };
        projectModel.findByIdAndUpdate(req.body._id, update)
          .then((upd) => res.status(201).json(upd))
          .catch((err) => res.status(500).json(err));
    },

    remove: function (req, res, next) {
        projectModel.findByIdAndRemove(req.params.id)
          .then(() => res.status(204).json())
          .catch(err => res.status(500).json());
    }
};

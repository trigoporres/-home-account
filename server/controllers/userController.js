const userModel = require('../models/userModel.js');

module.exports = {

    show: function (req, res) {
        userModel.find({_id:req.params.id})
          .then(oneUser =>
              res.status(200).json(oneUser)
            )
          .reject(err =>
            res.status(500).json({
            message: 'Error when getting user.'})
          )
          .reject(err =>
            res.status(404).json({
            message: 'No such user'}));
    },

    create: function (req, res) {
        var user = new userModel({
			       first_name : req.body.first_name,
			       last_name : req.body.last_name,
			       email : req.body.email,
             username: req.body.username,
			       password : req.body.password,
           });

        user.save()
          .then(user =>
            {res.status(201).json({message: 'New user created¡', project});
          })
          .catch(err =>
            res.status(500).json({
                message: 'Error when creating user',
                error: err,
          }));
    },

    update: function (req, res) {
      console.log(req.body);
      const update = {
        first_name : req.body.first_name ,
        last_name : req.body.last_name ,
        email : req.body.email ,
        username : req.body.username,
        password : req.body.password ,
        phone : req.body.phone ,
        salary : req.body.salary ,
        money : req.body.money,
        location : req.body.location,
        image : `/uploads/${req.file.filename}`
      };
      console.log(update);
      console.log("id:", req.user._id);
        userModel.findByIdAndUpdate(req.user._id, update)
          .then((upd) => res.status(201).json(upd))
          .catch((err) => res.status(500).json(err));
    },

    remove: function (req, res) {
        userModel.findByIdAndRemove(req.params.id)
        .then(() => res.status(204).json())
        .catch(err => res.status(500).json());
    }
};

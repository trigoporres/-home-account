var userModel = require('../models/userModel.js');

module.exports = {

    list: function (req, res) {
        userModel.find(function (err, users) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting user.',
                    error: err
                });
            }
            return res.json(users);
        });
    },

    show: function (req, res) {
        var id = req.params.id;
        userModel.findOne({_id: id}, function (err, user) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting user.',
                    error: err
                });
            }
            if (!user) {
                return res.status(404).json({
                    message: 'No such user'
                });
            }
            return res.json(user);
        });
    },

    create: function (req, res) {
        console.log(req.body);
        var user = new userModel({
			       first_name : req.body.first_name,
			       last_name : req.body.last_name,
			       email : req.body.email,
             username: req.body.username,
			       password : req.body.password,
			       phone : req.body.phone,
			       salary : req.body.salary,
			       address : req.body.address,
			       balance : req.body.salary
           });

        user.save(function (err, user) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating user',
                    error: err
                });
            }
            return res.status(201).json(user);
        });
    },

    update: function (req, res) {
        var id = req.params.id;
        userModel.findOne({_id: id}, function (err, user) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting user',
                    error: err
                });
            }
            if (!user) {
                return res.status(404).json({
                    message: 'No such user'
                });
            }
              console.log(req.body);
               user.first_name = req.body.user.first_name ;
			         user.last_name = req.body.user.last_name ;
			         user.email = req.body.user.email ;
               user.username = req.body.user.username;
			         user.password = req.body.user.password ;
			         user.phone = req.body.user.phone ;
			         user.salary = req.body.user.salary ;
			         user.address = req.body.user.address ;
			         user.balance = req.body.user.balance;

            user.save(function (err, user) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating user.',
                        error: err
                    });
                }

                return res.json(user);
            });
        });
    },

    remove: function (req, res) {
        var id = req.params.id;
        userModel.findByIdAndRemove(id, function (err, user) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the user.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};

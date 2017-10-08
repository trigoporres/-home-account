var debtModel = require('../models/debtModel.js');

module.exports = {

    list: function (req, res) {
        debtModel.find(function (err, debts) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting debt.',
                    error: err
                });
            }
            return res.json(debts);
        });
    },

    show: function (req, res) {
        var id = req.params.id;
        debtModel.findOne({_id: id}, function (err, debt) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting debt.',
                    error: err
                });
            }
            if (!debt) {
                return res.status(404).json({
                    message: 'No such debt'
                });
            }
            return res.json(debt);
        });
    },

    create: function (req, res) {
      console.log(req.body.name)
        var debt = new debtModel({
			name : req.body.debt.name,
			quantity : req.body.debt.quantity,
			//monthly : req.body.monthly,
			fin : req.body.debt.finaly

        });

        debt.save(function (err, debt) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating debt',
                    error: err
                });
            }
            return res.status(201).json(debt);
        });
    },

    update: function (req, res) {
        var id = req.params.id;
        debtModel.findOne({_id: id}, function (err, debt) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting debt',
                    error: err
                });
            }
            if (!debt) {
                return res.status(404).json({
                    message: 'No such debt'
                });
            }

      debt.name = req.body.name ? req.body.name : debt.name;
			debt.quantity = req.body.quantity ? req.body.quantity : debt.quantity;
			debt.monthly = req.body.monthly ? req.body.monthly : debt.monthly;
			debt.fin = req.body.fin ? req.body.fin : debt.fin;

            debt.save(function (err, debt) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating debt.',
                        error: err
                    });
                }

                return res.json(debt);
            });
        });
    },

    remove: function (req, res) {
        var id = req.params.id;
        debtModel.findByIdAndRemove(id, function (err, debt) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the debt.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};

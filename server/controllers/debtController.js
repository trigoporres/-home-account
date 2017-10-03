var debtModel = require('../models/debtModel.js');

/**
 * debtController.js
 *
 * @description :: Server-side logic for managing debts.
 */
module.exports = {

    /**
     * debtController.list()
     */
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

    /**
     * debtController.show()
     */
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

    /**
     * debtController.create()
     */
    create: function (req, res) {
        var debt = new debtModel({
			name : req.body.name,
			quantity : req.body.quantity,
			monthly : req.body.monthly,
			fin : req.body.fin

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

    /**
     * debtController.update()
     */
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

    /**
     * debtController.remove()
     */
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

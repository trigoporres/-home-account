var expensesModel = require('../models/expensesModel.js');

/**
 * expensesController.js
 *
 * @description :: Server-side logic for managing expensess.
 */
module.exports = {

    /**
     * expensesController.list()
     */
    list: function (req, res) {
        expensesModel.find(function (err, expensess) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting expenses.',
                    error: err
                });
            }
            return res.json(expensess);
        });
    },

    /**
     * expensesController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        expensesModel.findOne({_id: id}, function (err, expenses) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting expenses.',
                    error: err
                });
            }
            if (!expenses) {
                return res.status(404).json({
                    message: 'No such expenses'
                });
            }
            return res.json(expenses);
        });
    },

    /**
     * expensesController.create()
     */
    create: function (req, res) {
        var expenses = new expensesModel({
			name : req.body.name,
			company : req.body.company,
			quantity : req.body.quantity,
			monthly : req.body.monthly,
			fin : req.body.fin,
			facture : req.body.facture

        });

        expenses.save(function (err, expenses) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating expenses',
                    error: err
                });
            }
            return res.status(201).json(expenses);
        });
    },

    /**
     * expensesController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        expensesModel.findOne({_id: id}, function (err, expenses) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting expenses',
                    error: err
                });
            }
            if (!expenses) {
                return res.status(404).json({
                    message: 'No such expenses'
                });
            }

            expenses.name = req.body.name ? req.body.name : expenses.name;
			expenses.company = req.body.company ? req.body.company : expenses.company;
			expenses.quantity = req.body.quantity ? req.body.quantity : expenses.quantity;
			expenses.monthly = req.body.monthly ? req.body.monthly : expenses.monthly;
			expenses.fin = req.body.fin ? req.body.fin : expenses.fin;
			expenses.facture = req.body.facture ? req.body.facture : expenses.facture;
			
            expenses.save(function (err, expenses) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating expenses.',
                        error: err
                    });
                }

                return res.json(expenses);
            });
        });
    },

    /**
     * expensesController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        expensesModel.findByIdAndRemove(id, function (err, expenses) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the expenses.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};

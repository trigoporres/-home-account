const expensesModel = require('../models/expensesModel.js');
const userModel = require('../models/userModel.js');

module.exports = {

    list: function (req, res,next) {
        expensesModel.find({creator:req.user._id})
          .then( listExpenses =>
            res.status(200).json(listExpenses))
          .reject(err => res.status(500).json(err));
    },

    show: function (req, res, next) {
        expensesModel.findOne({_id: req.params.id})
          .then( oneExpenses =>
              res.status(200).json(oneExpenses))
          .reject(err =>
              res.status(500).json({
              message: 'Error when getting expenses.'})
            )
          .reject(err =>
              res.status(404).json({
              message: 'No such expenses'}));
    },

    create: function (req, res) {
        const expenses = new expensesModel({
          creator  : req.body.expenses.creator,
			    name     : req.body.expenses.name,
			    company  : req.body.expenses.company,
			    quantity : req.body.expenses.quantity,
			    monthly  : req.body.expenses.monthly,
			    fin      : req.body.expenses.fin,
			    facture  : req.body.expenses.facture
        });

        expenses.save()
        .then(expenses => {
            userModel.findOne({_id: expenses.creator})
            .then(user =>{
              user.salary = user.salary - expenses.quantity ;
              user.save()
                .then( ()=> res.status(200).json(user));
            });
        });
    },

    update: function (req, res) {
      const update = {
        name     : req.body.name,
        company  : req.body.company,
        quantity : req.body.quantity,
        monthly  : req.body.monthly,
        fin      : req.body.fin,
        facture  : req.body.facture
      };

      expensesModel.findByIdAndUpdate(req.body._id, update)
        .then((upd) => res.status(201).json(upd))
        .catch((err) => res.status(500).json(err));
    },

    remove: function (req, res, next) {
        expensesModel.findByIdAndRemove(req.params.id)
          .then(() => res.status(204).json())
          .catch(err => res.status(204).json());
    }
};

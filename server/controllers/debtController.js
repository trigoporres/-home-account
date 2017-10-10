var debtModel = require('../models/debtModel.js');

module.exports = {

    list: function (req, res,next) {
        debtModel.find({creator:req.user._id})
          .then( listDebt =>
            res.status(200).json(listDebt))
          .reject(err => res.status(500).json(err));
    },

    show: function (req, res, next) {
        var id = req.params.id;
        debtModel.findOne({id: req.params.id})
          .then( oneDebt =>
            res.status(200).json(oneDebt))
          .reject(err =>
            res.status(500).json({
              message: 'Error when getting debt.'
            }))
          .reject( err =>
            res.status(404).json({
              message: 'No such debt'}));
    },

    create: function (req, res, next) {
      console.log(req.body);
      const debt = new debtModel({
        creator  : req.body.user._id,
			  name     : req.body.debt.name,
			  quantity : req.body.debt.quantity,
			  fin      : req.body.debt.finaly
        });

        debt.save()
          .then (debt =>
            {res.status(201).json({message: 'New debt created¡', debt});
          })
          .catch(err =>
            {res.status(500).json({err:err, message: 'Cannot create debt'});
          });
    },

    update: function (req, res) {
        const update = {
          name : req.body.name,
    			quantity : req.body.quantity,
    			fin : req.body.fin,
        };
        var id = req.params.id;
        debtModel.findByIdAndUpadate(req.body._id, update)
          .then((upd) => res.status(201).json(upd))
          .catch((err) => res.status(500).json(err));
    },


    remove: function (req, res, next) {
      debtModel.findByIdAndRemove(req.params.id)
        .then(() => res.status(204).json())
        .catch(err => res.status(500).json());
    }
};

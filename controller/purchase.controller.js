var Purchase = require('../models/purchase.model.js');

exports.allPurchase = (req, res) => {
    res.render('index',
        {
            title:'Purchase',
            message:'Welcome'
        }
    )
};